import request from 'supertest';
import app from '../../app';
import { SIGNUP_ROUTE } from '../signup';

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
		email = 'test@gmail.com';
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
});

describe('test Sanitization of email input', () => {
	it('should not contain uppercase letters in the domain of the email', async () => {
		const normalizedEmail = 'test@gmail.com';
		const response = await request(app)
			.post(SIGNUP_ROUTE)
			.send({
				email: 'test@gmail.Com',
				password: 'Valid123'
			})
			.expect(200);
		expect(response.body.email).toEqual(normalizedEmail);
	});
});
describe('test Sanitization of Password input', () => {
	it('should not Contain unescaped Charactors', async () => {
		await request(app).post(SIGNUP_ROUTE).send({
			email: 'test@gmail.Com',
			password: 'Valid1<>"'
		}).expect(200);
	});
});
