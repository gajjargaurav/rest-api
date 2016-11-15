import winston from 'winston'
import config from 'config'
import fs from 'fs'

const transports = []

if (config.logging.winston.file) {
	createLogFolderIfNotExist()
	transports.push(new winston.transports.File(config.logging.winston.file))
}

if (config.logging.winston.console) {
	transports.push(new winston.transports.Console(config.logging.winston.console))
}

function createLogFolderIfNotExist() {
	try {
		fs.accessSync(`${config.logging.winston.file.dirname}`)
	} catch (e) {
		fs.mkdirSync(config.logging.winston.file.dirname)
	}
}

export default new winston.Logger({ transports })
