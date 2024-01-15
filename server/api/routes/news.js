const express = require("express");
const router = express.Router();
const Parser = require("rss-parser");

async function getFeed(feedUrl) {
  let parser = new Parser();

  let feed = await parser.parseURL(feedUrl);

  return feed;
}
const URL_MOS = "https://www.mos.ru/rss";
const URL_LENTA = "https://lenta.ru/rss/news";

router.get("/", async (req, res) => {
  try {
    const rssMos = await getFeed(URL_MOS);
    const rssLenta = await getFeed(URL_LENTA);
    const post = [...rssMos.items, ...rssLenta.items];
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
