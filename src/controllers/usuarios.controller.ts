import { NextFunction, Request, Response } from 'express';
import Usuario from '../models/Usuarios.model';
import { check, validationResult } from 'express-validator';

export function signupForm(req: Request, res: Response): any {
    res.render('auth/signup', {
        title: 'Registro',
        bar: true,
        tagline: 'Publica tus vacantes gratis'
    });
}

export const validateSignup = [
    check('name').notEmpty().withMessage('El nombre es obligatorio').escape().trim(),
    check('email').notEmpty().withMessage('El email es obligatorio').isEmail().withMessage('El email no es válido').normalizeEmail(),
    check('password').notEmpty().withMessage('La contraseña es obligatoria').escape().trim(),
    check('confirmPassword').notEmpty().withMessage('La confirmación de la contraseña es obligatoria').equals('password').withMessage('Las constraseñas no son iguales').escape().trim(),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        console.log(errors);
        return;
    }
]

export async function signupSave(req: Request, res: Response, next: NextFunction): Promise<any> {

    const usuario = new Usuario(req.body);
    const nuevoUsuario = await usuario.save();

    if (!nuevoUsuario) return next(new Error('Error al crear el usuario'));

    res.redirect('/auth/signin');
}