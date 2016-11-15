import request from 'supertest'
import app from '../server'

describe('GET /', () => {
	it('expects 200', () => {
		return request(app)
		.get('/')
		.expect(200)
	})
})
