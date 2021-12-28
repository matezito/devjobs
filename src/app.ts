import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import morgan from 'morgan';

import { PORT } from './enviroment';

const app = express();

import indexRouter from './routes/index.route';

//settings
app.set('port', PORT);

//views
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./libs/handlebars'),
    defaultLayout: 'main',
}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

//routes
app.use(indexRouter);

export default app;