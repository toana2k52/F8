import express from 'express';
import morgan from 'morgan';

import { engine } from 'express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

//Morgan log
app.use(morgan('combined'));

//Handlebars
app.engine('hbs', engine({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', __dirname+'/resources/views');

//Render
app.get('/', (req, res) => {
  res.render('home')
});
app.get('/news', (req, res) => {
  res.render('news')
});

app.listen(3000, () => console.log(3000));