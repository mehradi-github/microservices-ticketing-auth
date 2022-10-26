import express,{ Request, Response } from 'express';
import { validateRequest } from '../middlewares/validate-request';

const { body, validationResult } = require('express-validator');

const router= express.Router();
router.post(
    '/api/users/singup',
    [
        body('email')
          .isEmail()
          .withMessage('Email must be valid'),
        body('password')
          .trim()
          .isLength({ min: 4, max: 20 })
          .withMessage('Password must be between 4 and 20 characters')
      ],
      validateRequest,
      (req: Request, res: Response) => {
    
    res.send('Hi there!');
});

export {router as signupRouter};