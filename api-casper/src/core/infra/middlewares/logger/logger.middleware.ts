import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Request: ${req.method} ${req.originalUrl}`);
    console.log(`Request params: ${JSON.stringify(req.params, null, 2)}`);
    console.log(`Resquet body: ${JSON.stringify(req.body, null, 2)}`);
    next();
  }
}
