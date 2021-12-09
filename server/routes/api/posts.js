const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Data
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Data
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    title: req.body.title,
    image: req.body.image,
    imageCaption: req.body.imageCaption,
    category: req.body.category,
    author: req.body.author,
    date: req.body.date,
    content: req.body.content
  });
  res.status(201).send();
});

// Delete Data
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send({});
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb+srv://press:auth@cluster0.wfzfa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {
      useNewUrlParser: true
    }
  );

  return client.db('pressapp').collection('posts');
}

module.exports = router;