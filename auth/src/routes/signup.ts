import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
export const SIGNUP_ROUTE = '/api/auth/signup';
const signupRouter = express.Router();
signupRouter.post(
	SIGNUP_ROUTE,
	[
		body('email')
			.isEmail()
			.withMessage('Email must be a in valid format')
			.normalizeEmail(),
		body('password')
			.trim()
			.isLength({ min: 8, max: 38 })
			.withMessage('Password must be between 8 to 32 charactors'),
		body('password')
			.matches(/^(.*[a-z].*)$/)
			.withMessage('Password should contain at least one lowercase letter'),
		body('password')
			.matches(/^(.*[A-Z].*)$/)
			.withMessage('Password should contain at least one Uppercase letter'),
		body('password')
			.matches(/^(.*\d.*)$/)
			.withMessage('Password should contain at least one digit'),
			body('password').escape()
	],
	(req: Request, res: Response) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			res.status(422).send({ errors: errors.array() });
		}
		if (/.+@[A-Z]/g.test(req.body.email)) {
			res.sendStatus(422);
		}
		if (/[><'"\/]/g.test(req.body.password)) {
			res.sendStatus(422);
		}

		res.send({ email: req.body.email });
	}
);
export default signupRouter;
