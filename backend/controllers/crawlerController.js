import CrawledPage from '../models/CrawledPageModel';
import puppeteer from 'puppeteer';

export const crawl = async (req, res) => {
  let { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: { message: 'URL is required.' } });
  }

  if (!url.match(/^(http:|https:)/i)) {
    url = 'http://' + url;
  }

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    console.log({ url });

    await page.goto(url, { waitUntil: 'networkidle2' });

    const data = await page.evaluate(() => {
      const description = document.querySelector('meta[name="description"]');
      const h1s = Array.from(document.querySelectorAll('h1')).map(h => h.innerText);
      const h2s = Array.from(document.querySelectorAll('h2')).map(h => h.innerText);
      const links = Array.from(document.querySelectorAll('a')).map(link => link.href);

      return {
        title: document.title,
        description: description ? description.content : undefined,
        h1s,
        h2s,
        links
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
    res.status(500).json({ error: { message: 'Failed to crawl the page.' } });
  }
};

// Load history using mongoose -> https://mongoosejs.com/
export const getHistory = (req, res) => {
  const page = parseInt(req.query.page, 6) || 1; // Default to page 1
  const limit = parseInt(req.query.limit, 6) || 6; // Default limit to 6 items
  const skip = (page - 1) * limit;

  CrawledPage.find()
    .sort({ creationDate: -1 })
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
    return res.status(400).json({ error: { message: 'URL is required.' } });
  }

  try {
    const result = await CrawledPage.findOneAndDelete({ url: url });

    if (result) {
      res.json({ message: 'Successfully deleted the page with the provided url.' });
    } else {
      res.status(404).json({ error: { message: 'No page found with the provided url.' } });
    }
  } catch (error) {
    console.error('Error deleting the page:', error.message);
    console.error(error.stack);
    res.status(500).json({ error: { message: 'Failed to delete the page.' } });
  }
};
