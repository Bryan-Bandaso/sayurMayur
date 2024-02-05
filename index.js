const express = require('express');
const app = express();
const router = require('./app/router');
const path = require('path');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'app', 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`),
);
