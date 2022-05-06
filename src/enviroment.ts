import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/test';
export const SECRET = process.env.SECRET || 'secret';
export const SECRET_KEY = process.env.SECRET_KEY || 'secretkey';