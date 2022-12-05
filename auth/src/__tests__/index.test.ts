import request from 'supertest';
import { app } from "../app";

it('Responds with a status of 200', async () => {
   await request(app) //SuperTest<Test>
    .get('/') //Test
    .expect(200) //statuscode
})