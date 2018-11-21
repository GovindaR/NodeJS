// es5
// require('./knexdb');
// const express = require('express')
// const morgan = require('morgan')

// es6
import "./knexdb";
import express from "express";
import morgan from "morgan";
import router from './router';
import logger from './logger';

const app = express()
const port = 8080

app.use(morgan('combined'));
app.use('/api',router);


app.listen(port, () => logger.info('server running'));