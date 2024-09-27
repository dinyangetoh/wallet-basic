import 'dotenv/config';

export const MONGODB_CONNECTION = 'MONGODB_CONNECTION';
export const MONGODB_HOST = process.env.MONGODB_HOST || '127.0.0.1';
export const MONGODB_PORT = parseInt(process.env.MONGODB_PORT) || 27017;
export const MONGODB_DATABASE = process.env.MONGODB_DATABASE;
