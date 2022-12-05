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
router.get('/articles/', async (req, res) => {
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
router.get('/articles/:id', async (req, res) => {
  const sql = `SELECT * FROM Articles WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else if (result.length === 0) {
      res.json(null);
    }
    res.json(result[0]);
  });
})

// add article
router.post('/articles/', async (req, res) => {
  const items = '(title, content, category, photo, score, issueId, releaseDay, releaseMonth, releaseYear)';
  const data = {
    title: req.body.title, 
    content: req.body.content, 
    category: req.body.category,
    photo: req.body.photo, 
    score: req.body.score, 
    issueId: req.body.issueId, 
    releaseDay: req.body.releaseDay, 
    releaseMonth: req.body.releaseMonth, 
    releaseYear: req.body.releaseYear
  };
  const query = `INSERT INTO Articles ${items} VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  db.query(query, Object.values(data), (err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({ 
      status: 'success', 
      data 
    });
  });
});

// delete article
router.delete('/articles/:id', async (req, res) => {
  const article = await db.query('DELETE FROM Articles WHERE id = ?', [req.params.id]);
  res.json(article);
});

// update article
router.put('/articles/:id', async (req, res) => {
  const query = `UPDATE Articles SET title = '${req.body.title}', content = '${req.body.content}', category = '${req.body.category}', photo = '${req.body.photo}', score = ${req.body.score}, issueId = ${req.body.issueId}, releaseDay = ${req.body.releaseDay}, releaseMonth = ${req.body.releaseMonth}, releaseYear = ${req.body.releaseYear} WHERE id = ${req.params.id}`;
  db.query(query, (err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({ 
      status: 'success', 
      executed: query
    });
  });
});

router.get('/issues/', async (req, res) => {
  const sql = 'SELECT * FROM Issues';
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

router.get('/issues/:id', async (req, res) => {
  const sql = `SELECT * FROM Issues WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else if (result.length === 0) {
      res.json(null);
    }
    res.json(result);
  });
});

router.post('/issues/', async (req, res) => {
  const items = '(photo, releaseDay, releaseMonth, releaseYear)';
  const data = {
    photo: req.body.photo, 
    releaseDay: req.body.releaseDay, 
    releaseMonth: req.body.releaseMonth, 
    releaseYear: req.body.releaseYear
  };
  const query = `INSERT INTO Issues ${items} VALUES (?, ?, ?, ?)`;
  db.query(query, Object.values(data), (err) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({ 
      status: 'success', 
      data 
    });
  });
});
module.exports = router;