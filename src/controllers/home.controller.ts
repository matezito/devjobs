import { Request, Response, NextFunction } from 'express';
import Vacante from '../models/Vacantes.model';

export async function index(req: Request, res: Response, next: NextFunction) : Promise<any>{

    const vacantes = await Vacante.find().lean();

    if(!vacantes) return next();

    res.render('index', {
        title: 'devJobs',
        tagline: 'Encuentra y publica trabajos de desarrollo web.',
        bar: true,
        button: true,
        vacantes
    });
}
