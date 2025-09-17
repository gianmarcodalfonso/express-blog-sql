const express = require(`express`)

// definisco l'oggetto router
const router = express.Router()

//importo il controller
const { index, show, store, update, modify, destroy } = require(`../controllers/postsController.js`)

//importo i dati dei posts
const posts = require(`../data/posts.js`)

// definizione rotte per i post
// index
router.get(`/`, index)

// show
router.get(`/:id`, show)

// create
router.post(`/`, store)

// update
router.put(`/:id`, update)

// patch
router.patch(`/:id`, modify)


// delete
router.delete(`/:id`, destroy)

//esporto il router
module.exports = router;