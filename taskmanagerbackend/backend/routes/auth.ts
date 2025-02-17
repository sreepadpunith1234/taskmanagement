import { Router } from 'express';
import { User } from '../models/User';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';

const router = Router();

router.post('/signup', 
  body('username').notEmpty(),
  body('password').isLength({ min: 6 }),
  body('email').isEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { username, password, email } = req.body;
    const user = await User.createUser(username, password, email);
    res.status(201).json(user);
  }
);

router.post('/login', 
  body('username').notEmpty(),
  body('password').notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { username, password } = req.body;
    const user = await User.findUserByUsername(username);
    if (!user || !(await User.validatePassword(user, password))) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
    res.json({ token });
  }
);

router.post('/logout', (req, res) => {
  res.status(200).json({ message: 'Logged out successfully' });
});

export default router;
