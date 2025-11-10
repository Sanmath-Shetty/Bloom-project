import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/api/auth', authRoutes);

export default app;
