"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = exports.JWT_SECRET = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.JWT_SECRET = ''; // Chave secreta para assinar JWT
const generateToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, exports.JWT_SECRET, { expiresIn: '1h' });
};
exports.generateToken = generateToken;
const verifyToken = (token) => {
    try {
        return jsonwebtoken_1.default.verify(token, exports.JWT_SECRET);
    }
    catch (error) {
        return null;
    }
};
exports.verifyToken = verifyToken;
