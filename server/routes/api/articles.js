const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

});

router.get('/:id', async (req, res) => {
// q: get all the authors for a given article
// a: SELECT * FROM authors WHERE id IN (SELECT author_id FROM article_author WHERE article_id = 1);
  
})

router.post('/', async (req, res) => {

  

});

router.delete('/:id', async (req, res) => {

  
});

router.put('/:id', async (req, res) => {

  
});

module.exports = router;