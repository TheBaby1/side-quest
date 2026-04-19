import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routers/authRoutes.js';

dotenv.config();
connectDB();

const app = express();

// middleware 
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})