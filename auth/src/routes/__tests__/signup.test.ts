import request from 'supertest';
import app from '../../app';
import { SIGNUP_ROUTE } from '../signup';

/**
 * Available HTPP methods in /api/auth/signup:
 * 	- POST
 * 	- GET
 * 	- PUT
 * 	- PATCH
 * 	- DELETE
 */
describe('', () => {
	let password = '';
	let email = '';
	beforeAll(() => {
		(password = 'ValidPassword1'), (email = 'test@yopmail.com');
	});
	it('Should return 405 for non-post requests to the signup route', async () => {
		await request(app).get(SIGNUP_ROUTE).expect(405);
		await request(app).put(SIGNUP_ROUTE).expect(405);
		await request(app).put(SIGNUP_ROUTE).expect(405);
		await request(app).delete(SIGNUP_ROUTE).expect(405);
	});
	it('Should return 200 for non-post requests to the signup route', async () => {
		await request(app).post(SIGNUP_ROUTE).send({ email, password }).expect(200);
	});
});
/**
 *  valid email conditions:
 * 		- Standard await formats from 'express-validator' package
 */
describe('test Validity of email input', () => {
	let password = '';
	beforeAll(() => {
		password = 'validPassword1';
	});
	it('should return 422 if the email is not provided', async () => {
		await request(app).post(SIGNUP_ROUTE).send({ password }).expect(422);
	});
	it('Should return 422 if the email is not valid', async () => {
		await request(app).post(SIGNUP_ROUTE).send({ password }).expect(422);
	});
	it('should return 200 if the email valid ', async () => {
		await request(app)
			.post(SIGNUP_ROUTE)
			.send({ email: 'test@yopmail.com', password })
			.expect(200);
	});
});
/**
 *  valid email conditions:
 * 		- At Least 8 charactors
 * 		- At Most 32 Charactors
 * 		- One lower-case letter
 * 		- One upper-case letter
 * 		- One Number
 */
describe('test Validity of password input', () => {
	let email = '';

	beforeAll(() => {
		email = 'test@yopmail.com';
	});
	it('should return 422 if the password is not provided', async () => {
		await request(app).post(SIGNUP_ROUTE).send({ email }).expect(422);
	});

	it('should return 422 if the password contains less than 8 charactors', async () => {
		await request(app)
			.post(SIGNUP_ROUTE)
			.send({ email, password: 'valid12' })
			.expect(422);
	});
	it('should return 422 if the password contains more than 32 charactors', async () => {
		await request(app)
			.post(SIGNUP_ROUTE)
			.send({ email, password: 'validvalidvalidvalidvalidvalidvalidvalidww' })
			.expect(422);
	});
	it('should return 422 if the password contains One lower case letter', async () => {
		await request(app)
			.post(SIGNUP_ROUTE)
			.send({ email, password: 'VALID12VALID12' })
			.expect(422);
	});
	it('should return 422 if the password contains One upper case letter', async () => {
		await request(app)
			.post(SIGNUP_ROUTE)
			.send({ email, password: 'valid12valid12valid12' })
			.expect(422);
	});
	it('should return 422 if the password does not contain a number', async () => {
		await request(app)
			.post(SIGNUP_ROUTE)
			.send({ email, password: 'validvalid' })
			.expect(422);
	});
	it('should return 200 if the passord is valid', async () => {
		await request(app)
			.post(SIGNUP_ROUTE)
			.send({ email, password: 'Smart@123' })
			.expect(200);
	});
	it('should return 200 if the passord is valid', async () => {
		const response = await request(app)
			.post(SIGNUP_ROUTE)
			.send({ email, password: 'validva' });
		console.log(response.body);
	});
});
