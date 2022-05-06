import express from 'express';
import path from 'path';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import flash from 'connect-flash';
import middlewareJobs from './middlewares/index.middlewares';
import routeM from './middlewares/route.middlewares';

import { default as connectMongoDBSession} from 'connect-mongodb-session';
const MongoDBStore = connectMongoDBSession(session);

import { PORT, SECRET, MONGO_URI } from './enviroment';

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

//static files
app.use(express.static(path.join(__dirname, 'public')));

//alerts messages
app.use(flash());

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoDBStore({
        uri: MONGO_URI,
        collection: 'sessions'
    })
}));
app.use(middlewareJobs);
app.use(routeM);

//routes
app.use(indexRouter);

export default app;