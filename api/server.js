// implement your server here
// require your posts router and connect it here

const express = require ('express')
const postsrouter = require ('./posts/posts-router.js')
const server = express()

server.use(express.json())

server.use('/api/posts', postsrouter)

server.use('', (req, res) => {
    res.status(404).json({
        measage: 'not found'

    })
})

module.exports = server 