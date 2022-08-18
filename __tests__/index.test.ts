import app from '../src/index'
import request from 'supertest'

describe('Testing Image Controller functionality', () => {
    test('Image Get All', async () => {
        const response = await request(app).get('/api/images')
        expect(response.statusCode).toBe(200)
    })
    test('Image Get One', async () => {
        const response = await request(app).get('/api/images/fjord.jpg')
        expect(response.statusCode).toBe(200)
    })
    test('Image Create', async () => {
        const response = await request(app).get('/api/images/create/fjord.jpg?width=100&height=100')
        expect(response.statusCode).toBe(200)
    })
})
