import request from 'supertest'
import app from '../../app'

// it('Should return 405 for non-post requests to the signup route',async () => {

// })
it('Should return 422 if the email is not valid', async () => {
  await request(app).post('/api/auth/signup').send({}).expect(422)

  await request(app).post('/api/auth/signup').send({ email: 'isInvalid' }).expect(422)
  await request(app).post('/api/auth/signup').send({ password: 'isInvalid' }).expect(422)
})
