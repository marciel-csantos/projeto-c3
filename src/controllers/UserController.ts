import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { generateToken } from '../services/AuthService';
import bcrypt from 'bcryptjs'; 

const prisma = new PrismaClient();

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já está em uso' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10); // Gera o hash da senha
    
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    
    const token = generateToken(user.id); // Gera o token JWT
    
    res.status(201).json({ message: 'Usuário criado com sucesso', user, token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário', error });
  }
};