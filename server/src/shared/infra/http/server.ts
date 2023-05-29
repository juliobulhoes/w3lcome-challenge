import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';
import '@shared/container';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

import http from 'http';

import AppError from '@shared/errors/AppError';
import routes from './routes';

const app = express();

const httpServer = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.status).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    message: 'Internal server error',
  });
});

const port = process.env.PORT || 3333;

httpServer.listen(port, () => {
  console.log(`✨ Servidor iniciado na porta: ${port}!`);
});
