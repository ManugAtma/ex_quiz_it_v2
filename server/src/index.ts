import { VercelRequest, VercelResponse } from '@vercel/node';
import app from './app';
import { createServer } from 'http';

const server = createServer(app);

export default (req: VercelRequest, res: VercelResponse) => {
    server.emit('request', req, res);
};
