import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const signupRouter = express.Router();

const myVariable = 'testing';
const test = `http://www.unsocial.app/user/${myVariable}`;
signupRouter.post(
	'/api/auth/signup',
	[body('email').isEmail().withMessage('Email must be a in valid format')],
	(req: Request, res: Response) => {
		const errors = validationResult(req);
		console.log('eroor', errors);

		if (!errors.isEmpty()) {
			res.status(422).send({});
		}
		res.send({});
	}
);

export default signupRouter;
