const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('../routes');

const {db} = require("../models"); 

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', routes);

app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  console.error(err);
  res.send("You got an error!");
});

app.listen(3000, () => {
    console.log('Listening on port 3000!')

    db.sync()
      .then(() => {
        console.log('Database is synced!')
      })
      .catch((err) => {
        console.error('Trouble!', err, err.stack);
        });
});
