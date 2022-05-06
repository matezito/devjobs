import { Request, Response, NextFunction } from "express";

export default function routeM(req: Request, res: Response, next: NextFunction): any {
    res.locals.currentUrl = req.originalUrl;
    next();
}