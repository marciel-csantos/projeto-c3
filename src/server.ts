import express from 'express';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});