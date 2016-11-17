import express from 'express'

const router = express.Router()

// This is the place where middlewares and individual resource middlewares
// can be piped to achieve the results desiged
// e.g. .get('/', isLoggedIn, hasAccess, userMiddleware.list)
router
.get('/:id', () => {})
.get('/', (req, res) => res.status(200).json({ status: 'ok', user: true }))
.post('/', () => {})
.patch('/:id', () => {})
.delete('/:id', () => {})

module.exports = router
