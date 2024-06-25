import jwt from 'jsonwebtoken';

export const JWT_SECRET = ''; // Chave secreta para assinar JWT

export const generateToken = (userId: number) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};