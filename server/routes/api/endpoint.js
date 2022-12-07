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

// get articles by issue
router.get('/articles/issue/:id', async (req, res) => {
  const sql = `SELECT * FROM Articles WHERE issueId = ${req.params.id}`;
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
  const sql = `DELETE FROM Articles WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
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

// delete issue by id
router.delete('/issues/:id', async (req, res) => {
  const sql = `DELETE FROM Issues WHERE id = ${req.params.id}`;
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

router.put('/issues/:id', async (req, res) => {
  const query = `UPDATE Issues SET photo = '${req.body.photo}', releaseDay = ${req.body.releaseDay}, releaseMonth = ${req.body.releaseMonth}, releaseYear = ${req.body.releaseYear} WHERE id = ${req.params.id}`;
  db.query
  (query, (err) => {
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

// get all authors
router.get('/authors/', async (req, res) => {
  const sql = 'SELECT * FROM Authors';
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

// get author by id
router.get('/authors/:id', async (req, res) => {
  const sql = `SELECT * FROM Authors WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    } else if (result.length === 0) {
      res.json(null);
    }
    res.json(result[0]);
  });
});

// update author by id
router.put('/authors/:id', async (req, res) => {
  const query = `UPDATE Authors SET firstName = '${req.body.firstName}', middleName = '${req.body.middleName}', lastName = '${req.body.lastName}', photo = '${req.body.photo}', bio = '${req.body.bio}', joinDay = ${req.body.joinDay}, joinMonth = ${req.body.joinMonth}, joinYear = ${req.body.joinYear}, title = '${req.body.title}' WHERE id = ${req.params.id}`;
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

// add author
router.post('/authors/', async (req, res) => {
  const items = '(firstName, middleName, lastName, photo, bio, joinDay, joinMonth, joinYear, title)';
  const data = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    photo: req.body.photo,
    bio: req.body.bio,
    joinDay: req.body.joinDay,
    joinMonth: req.body.joinMonth,
    joinYear: req.body.joinYear,
    title: req.body.title
  };
  const query = `INSERT INTO Authors ${items} VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
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

// delete author by id
router.delete('/authors/:id', async (req, res) => {
  const sql = `DELETE FROM Authors WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

// add author to article
router.post('/articleAuthor/:articleId/:authorId', async (req, res) => {
  const items = '(articleId, authorId)';
  const data = {
    articleId: req.params.articleId,
    authorId: req.params.authorId
  };
  const query = `INSERT INTO ArticleAuthor ${items} VALUES (?, ?)`;
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

// get all of an articles authors
router.get('/articleAuthor/:articleId', async (req, res) => {
  const sql = `SELECT authorId FROM ArticleAuthor WHERE articleId = ${req.params.articleId}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result.map((author) => author.authorId));
  });
});

// delete all authors from article
router.delete('/articleAuthor/:articleId', async (req, res) => {
  const sql = `DELETE FROM ArticleAuthor WHERE articleId = ${req.params.articleId}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

// remove author from article
router.delete('/articleAuthor/:articleId/:authorId', async (req, res) => {
  const sql = `DELETE FROM ArticleAuthor WHERE articleId = ${req.params.articleId} AND authorId = ${req.params.authorId}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(result);
  });
});

module.exports = router;