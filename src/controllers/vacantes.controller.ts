import { NextFunction, Request, Response } from 'express';
import Vacante from '../models/Vacantes.model';

export function newVacanteForm(req: Request, res: Response) : void {
    
    return res.render('vacantes/nueva', {
        title: 'Nueva Vacante',
        tagline: 'Publica tu vacante'
    })
}

export async function newVacanteSave (req: Request, res: Response) : Promise<any> {
    
    const { title, company, location, salary, contract, description, skills } = req.body;

    const vacante = new Vacante({
        title,
        company,
        location,
        salary,
        contract,
        description,
        skills: skills.split(',')
    });

    const saveVancante = await vacante.save();

    res.redirect(`/vacantes/${saveVancante.url}`);
}

export async function vacante(req: Request, res: Response, next: NextFunction) : Promise<any> {
    const { url } = req.params;

    const vacante = await Vacante.findOne({ url }).lean();

    if (!vacante) return next();

    res.render('vacantes/vacante', {
        title: vacante.title,
        bar: true,
        vacante
    });
}

export async function editVacanteForm(req: Request, res: Response, next: NextFunction) : Promise<any> {
    const { url } = req.params;

    const vacante = await Vacante.findOne({ url }).lean();

    if(!vacante) return next();

    res.render('vacantes/editar', {
        title: `Editar vacante: ${vacante.title}`,
        vacante
    });
}

export async function editVacanteSave(req: Request, res: Response, next: NextFunction) : Promise<any> {
    const { url } = req.params;

    const { title, company, location, salary, contract, description, skills } = req.body;

    const vacante = await Vacante.findOneAndUpdate({ url }, {
        title,
        company,
        location,
        salary,
        contract,
        description,
        skills: skills.split(',')
    }, { new: true });

    res.redirect(`/vacantes/editar/${url}`);

}