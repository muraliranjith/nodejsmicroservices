import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const signupRouter = express.Router();

const myVariable = 'testing';
const test = `http://www.unsocial.app/user/${myVariable}`;
signupRouter.post(
	'/api/auth/signup',
	[body('email').isEmail().withMessage('Email must be a in valid format')],
	[body('password').trim().isLength({ min: 8, max: 38 }).withMessage('Password must be between 8 to 32 charactors')],
	[body('password').matches(/^(.*[a-z].*)$/).withMessage('Password should contain at least one lowercase letter')],
	[body('password').matches(/^(.*[A-Z].*)$/).withMessage('Password should contain at least one Uppercase letter')],
	[body('password').matches(/^(.*\d.*)$/).withMessage('Password should contain at least one digit')],
	(req: Request, res: Response) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(422).send({errors: errors.array()});
		}
		res.send({});
	}
);

export default signupRouter;
