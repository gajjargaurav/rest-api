import express from 'express'
import users from './routes/users'

const router = express.Router()

router.use('/users', users)

router.get('/', (req, res) => {
	res.status(200).json({ status: 'ok', cake: false })
})

export default router
