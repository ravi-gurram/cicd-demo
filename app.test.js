const request = require('supertest');
const app = require('./app');

describe('CI/CD Demo API Tests', () => {

  describe('GET /', () => {
    it('should return welcome message with endpoints list', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toContain('CI/CD Demo API');
      expect(res.body.endpoints).toBeInstanceOf(Array);
      expect(res.body.endpoints.length).toBe(4);
    });
  });

  describe('GET /health', () => {
    it('should return health status ok', async () => {
      const res = await request(app).get('/health');
      expect(res.statusCode).toBe(200);
      expect(res.body.status).toBe('ok');
      expect(res.body.version).toBe('1.0.0');
      expect(res.body.timestamp).toBeDefined();
    });
  });

  describe('GET /greet/:name', () => {
    it('should greet a user by name', async () => {
      const res = await request(app).get('/greet/Ravi');
      expect(res.statusCode).toBe(200);
      expect(res.body.greeting).toContain('Ravi');
    });

    it('should greet another user correctly', async () => {
      const res = await request(app).get('/greet/DevOps');
      expect(res.statusCode).toBe(200);
      expect(res.body.greeting).toContain('DevOps');
    });
  });

  describe('POST /add', () => {
    it('should add two numbers correctly', async () => {
      const res = await request(app).post('/add').send({ a: 5, b: 3 });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(8);
    });

    it('should return 400 if inputs are not numbers', async () => {
      const res = await request(app).post('/add').send({ a: 'five', b: 3 });
      expect(res.statusCode).toBe(400);
      expect(res.body.error).toBeDefined();
    });

    it('should handle negative numbers', async () => {
      const res = await request(app).post('/add').send({ a: -10, b: 4 });
      expect(res.statusCode).toBe(200);
      expect(res.body.result).toBe(-6);
    });
  });

});
