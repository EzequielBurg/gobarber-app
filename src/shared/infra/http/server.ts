import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';

import express, { Response, Request, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import uploadConfig from '@config/upload';

import AppError from '@shared/errors/AppError';
import rateLimiter from './middlewares/rateLimiter';
import '@shared/infra/typeorm';
import '@shared/container';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(rateLimiter);
app.use(routes);

app.use(errors());

app.use(
  (err: Error, rquest: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message,
      });
    }

    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => console.log('Server started on port 3333'));
