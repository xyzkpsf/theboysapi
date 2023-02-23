import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = 3000;

export const config = {
  mongo: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/Boys'
  },
  server: {
    port: parseInt(<string>process.env.PORT, 10) || SERVER_PORT
  }
};
