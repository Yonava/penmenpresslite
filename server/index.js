const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'press.c0w2juzukesp.us-east-1.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'cs231db!'
});

db.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected to database');
});

const app = express();

app.use(express.json());
app.use(cors());

const articles = require('./routes/api/articles');
app.use('/api/articles', articles);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Listening @ localhost:${port}`));
