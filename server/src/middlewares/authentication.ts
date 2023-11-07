import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv';
import { findUserById } from '../models/users';

const secretKey = process.env.PRIVATE_KEY;

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization').split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided' });
  }

  try {
    const decoded: any = jwt.verify(token, secretKey);
    const realToken =  (await findUserById(decoded.userId)).token
    if(token === realToken ){
      req.body.userId = decoded.userId;
    }else{
      return res.status(403).json({'error': "forbidden"})
    }
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token', token: token });
  }
};
