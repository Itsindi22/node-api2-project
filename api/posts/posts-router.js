// implement your posts router here
const express = require ('express')
const Post = require ('./posts-model.js')

const router = express.Router()

router.get('/',(req,res) => {
    Post.find() 
    .then(found => {
       res.json(found)
    })
    .catch (err => {
      res.status(500).json({
        message:"The points information could not be retrivered",
        err: err.message,
        stack: err.stack,
      })
    })
})
router.get('/:id',async (req,res) => {

    try {

    } catch  (err) {
      res.status(500).json({
        message:"The points information could not be retrivered",
        err: err.message,
        stack: err.stack,
      })
    }
})
router.post('/',(req,res) => {

})
router.delete('/:id',(req,res) => {

})
router.put('/:id',(req,res) => {

})
router.get('/:id/messages',(req,res) => {

})



module.exports = router

