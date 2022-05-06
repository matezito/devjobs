import { Request, Response, NextFunction } from 'express';
import flash from 'connect-flash';

export default function middlewareJobs(req: Request, res: Response, next: NextFunction): any {
    res.locals.message = req.flash();
    next();
}
