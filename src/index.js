import express from 'express';
import morgan from 'morgan';
import routes from './routes/index.js';

import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static(__dirname+'/public'));

//convert post's param to req.body 
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


//Morgan log
// app.use(morgan('combined'));

//Handlebars
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname+'/resources/views');

//Render
routes(app);

app.listen(3000, () => console.log(3000));