import { Router } from 'express';

const router: Router = Router();

import { index } from '../controllers/home.controller';
import { newVacanteForm, newVacanteSave, vacante, editVacanteForm, editVacanteSave } from '../controllers/vacantes.controller';
import { signupForm,signupSave,validateSignup } from '../controllers/usuarios.controller';

router.route('/')
    .get(index);

router.route('/vacantes/nueva')
    .get(newVacanteForm)
    .post(newVacanteSave);

router.route('/vacantes/:url')
    .get(vacante);

router.route('/vacantes/editar/:url')
    .get(editVacanteForm)
    .post(editVacanteSave);

router.route('/auth/signup')
    .get(signupForm)
    .post(validateSignup,signupSave);

export default router;