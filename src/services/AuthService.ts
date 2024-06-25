import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../utils/jwt';

export const generateToken = (userId: number) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

export const comparePasswords = async (plainPassword: string, hashedPassword: string) => {
    return await bcrypt.compare(plainPassword, hashedPassword);
};