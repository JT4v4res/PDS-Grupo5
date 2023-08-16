import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';
import * as process from "process";

@Injectable()
export class authMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const authHeader: string = req.headers.authorization;
        if (!authHeader) {
            return res
                .status(401)
                .json({ message: 'Authorization header not found'});
        }

        const [, token] = authHeader.split(' ');

        try {
            req['userId'] = jwt.verify(token, process.env.JWT_SECRET);
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
        }
    }
}
