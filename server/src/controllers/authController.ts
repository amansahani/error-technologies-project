import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, findUserByEmail, updateUserToken } from '../models/users';
import 'dotenv';

const secretKey = process.env.PRIVATE_KEY;

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  
  const existingUser = await findUserByEmail(email);

  if(existingUser){
    return res.status(400).json({error: "An existingUser is already in use."});
  }

  try {
    const user = await createUser(email, hashedPassword);

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(400).json({ error: 'Registration failed' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);
  if (!user) {
    return res.status(401).json({ error: 'User not found' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: 'Incorrect password' });
  }

  try {
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1w' });
    await updateUserToken(user.id, token);

  return res.status(200).json({ "token" : token });
  } catch (error) {
    console.log(error);
  }

  // Save the token in the database
  
};
