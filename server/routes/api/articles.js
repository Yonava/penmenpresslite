const express = require('express');
const Article = require('../../models/Articles');
const router = express.Router();

router.get('/', async (req, res) => {

    console.log("getting stuff")
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:id', async (req, res) => {

    try {
        const articles = await Article.findOne({ _id: req.params.id });
        res.json(articles);
    } catch (error) {
        res.json({ message: error });
    }
})

router.post('/', async (req, res) => {

    const article = new Article({
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        imageCaption: req.body.imageCaption,
        category: req.body.category,
        author: req.body.author,
        date: req.body.date
    });

    try {
        const savedArticle = await article.save();
        res.json(savedArticle);
    } catch (error) {
        res.json({ message: error });
    }

});

router.delete('/:id', async (req, res) => {

    try {
        const removedArticle = await Article.deleteOne({ _id: req.params.id });
        res.json(removedArticle);
    } catch (error) {
        res.json({ message: error })
    }
});

router.put('/:id', async (req, res) => {

    try {
        const updatedArticle = await Article.updateOne(
            { _id: req.params.id }, 
            { $set: 
            { score: req.body.score } }
        );
        res.json(updatedArticle);
    } catch (error) {
        res.json({ message: error })
    }
});

module.exports = router;