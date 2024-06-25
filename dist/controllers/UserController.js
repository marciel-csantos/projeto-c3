"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const AuthService_1 = require("../services/AuthService");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma = new client_1.PrismaClient();
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários', error });
    }
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name } = req.body;
        const existingUser = yield prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email já está em uso' });
        }
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10); // Gera o hash da senha
        const user = yield prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        });
        const token = (0, AuthService_1.generateToken)(user.id); // Gera o token JWT
        res.status(201).json({ message: 'Usuário criado com sucesso', user, token });
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao criar usuário', error });
    }
});
exports.createUser = createUser;
