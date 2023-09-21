import CrawledPage from '../models/CrawledPageModel';
import puppeteer from 'puppeteer';

export const crawl = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: 'URL is required.' });
  }

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
      const description = document.querySelector('meta[name="description"]');
      const h1 = document.querySelector('h1');
      const h2 = document.querySelector('h2');
      return {
        title: document.title,
        description: description ? description.content : undefined,
        h1: h1 ? h1.innerText : undefined,
        h2: h2 ? h2.innerText : undefined,
        links: Array.from(document.querySelectorAll('a')).map(link => link.href)
      };
    });

    await browser.close();

    // Saving the data to MongoDB
    const crawledData = new CrawledPage({
      ...data,
      url: url
    });

    await crawledData.save();

    res.json(crawledData);
  } catch (error) {
    console.error('Error crawling the page:', error.message);
    console.error(error.stack);
    res.status(500).json({ error: 'Failed to crawl the page.' });
  }
};

// Load history using mongoose -> https://mongoosejs.com/
export const getHistory = (req, res) => {
  const page = parseInt(req.query.page, 6) || 1; // Default to page 1
  const limit = parseInt(req.query.limit, 6) || 6; // Default limit to 6 items
  const skip = (page - 1) * limit;

  CrawledPage.find()
    .skip(skip)
    .limit(limit)
    .exec((error, pages) => {
      if (error) {
        return res.status(400).json(error);
      }

      CrawledPage.countDocuments({}, (err, count) => {
        if (err) {
          return res.status(400).json(err);
        }

        return res.json({
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          data: pages
        });
      });
    });
};

export const deleteCrawl = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required.' });
  }

  try {
    const result = await CrawledPage.findOneAndDelete({ url: url });

    if (result) {
      res.json({ message: 'Successfully deleted the page with the provided url.' });
    } else {
      res.status(404).json({ error: 'No page found with the provided url.' });
    }
  } catch (error) {
    console.error('Error deleting the page:', error.message);
    console.error(error.stack);
    res.status(500).json({ error: 'Failed to delete the page.' });
  }
};
