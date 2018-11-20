// es5
// require('./knexdb');
// const express = require('express')
// const morgan = require('morgan')

// es6
import "./knexdb";
import express from "express";
import morgan from "morgan";
import router from './router';

const app = express()
const port = 3000

app.use(morgan('combined'));
app.use('/api',router);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))