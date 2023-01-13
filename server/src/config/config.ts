import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

export const config = {
    mongo: {
        url: process.env.MONGODB_URI || 'mongodb://localhost:27017/Boys'
    },
    server: {
        port: SERVER_PORT
    }
};
