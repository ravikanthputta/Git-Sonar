const request = require('supertest');
const app = require('../src/index');

describe('User API Endpoints', () => {
  test('GET /api/users should return empty array', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('users');
    expect(Array.isArray(res.body.users)).toBeTruthy();
  });

  test('POST /api/users should validate input', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});