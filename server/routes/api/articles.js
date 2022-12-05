const express = require('express');
const router = express.Router();

// get all articles
router.get('/', async (req, res) => {
  const articles = await db.query('SELECT * FROM Articles');
  res.json(articles);
});

// get article by id
router.get('/:id', async (req, res) => {
  const article = await db.query('SELECT * FROM Articles WHERE id = ?', [req.params.id]);
  res.json(article);
})

// add article
router.post('/', async (req, res) => {
  const article = await db.query('INSERT INTO Articles SET ?', [req.body]);
  res.json(article);
});

// delete article
router.delete('/:id', async (req, res) => {
  const article = await db.query('DELETE FROM Articles WHERE id = ?', [req.params.id]);
  res.json(article);
});

// update article
router.put('/:id', async (req, res) => {
  const article = await db.query('UPDATE Articles SET ? WHERE id = ?', [req.body, req.params.id]);
  res.json(article);
});

module.exports = router;