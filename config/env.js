import dotenv from 'dotenv';
dotenv.config();

export const ENV ={
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV ,
    JWT_SECRET: process.env.JWT_SECRET, 
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    DB_URL: process.env.DB_URL 
};