import express from 'express';
import { crawl, deleteCrawl, getHistory } from '../controllers/crawlerController';
let crawlerRouter = express.Router();

// we protect the POST, PUT and DELETE methods
crawlerRouter.post('/crawl', crawl);
crawlerRouter.delete('/delete', deleteCrawl);
crawlerRouter.get('/history', getHistory);

export default crawlerRouter;
