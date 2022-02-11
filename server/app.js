// declarations
require('dotenv').config()
const { ENVIRONMENT, PORT } = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// routes improt
const catsRoutes = require('./routes/catsRoutes')


const app = express();

// middleware setup
app.use(morgan(ENVIRONMENT));
app.use(bodyParser.json());

// routes
app.use('/cats', catsRoutes());


app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));