const express = require('express');
const router = express.Router();

const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'press-db.c0w2juzukesp.us-east-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'cs231db!',
  database: 'press'
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected to database');
});

// get all articles
router.get('/', async (req, res) => {
  const sql = 'SELECT * FROM Articles';
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

// get article by id
router.get('/:id', async (req, res) => {
  const sql = `SELECT * FROM Articles WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
})

// add article
router.post('/', async (req, res) => {
  const query = 'INSERT INTO Articles (title, content, author) VALUES (?, ?, ?)';
  const values = [req.body.title, req.body.content, req.body.author];
  
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