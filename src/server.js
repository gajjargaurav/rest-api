import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import boom from 'express-boom'
import path from 'path'
import favicon from 'serve-favicon'

import logger from './api/modules/logger'
import api from './api'

// app
const app = express()

app.use(boom())
app.use(cors({
	origin: true,
	credentials: true,
}))

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// parse traffic
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/', api)
app.use(express.static(path.join(__dirname, 'public')))

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found')
	err.status = 404
	next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use((err, req, res) => {
		res.status(err.status || 500)
		res.render('error', {
			message: err.message,
			error: err,
		})
	})
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
	res.status(err.status || 500)
	res.render('error', {
		message: err.message,
		error: {},
	})
})

// http server
app.listen('1337', () => {
	logger.info('App: Server is running on port 1337')
})

module.exports = app
