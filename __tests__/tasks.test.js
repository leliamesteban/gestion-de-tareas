const request = require('supertest');

describe('Tasks API', () => {
  it('GET /tasks should return a list of tasks', async () => {
    const res = await request('http://localhost:3001').get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('POST /tasks should create a new task', async () => {
    const newTask = {
      title: 'New Task',
      description: 'New Task Description',
      date: '2024-07-25'
    };
    const res = await request('http://localhost:3001').post('/tasks').send(newTask);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'New Task');
  });
});
