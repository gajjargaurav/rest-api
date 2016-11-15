import express from 'express'

const router = express.Router()

router
.get('/:id', () => {})
.get('/', (req, res) => res.status(200).json({ status: 'ok', user: true }))
.post('/', () => {})
.patch('/:id', () => {})
.delete('/:id', () => {})

module.exports = router
