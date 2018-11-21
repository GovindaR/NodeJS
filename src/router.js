
// es6
import express from "express";
import driverController from './controller/driverController';

const app = express();

app.get('/', (req, res) => res.send(200, 'Api is running'));

app.use('/driver', driverController);
// app.get('/', (req, res) => res.send(
//     {
//     users:{
//         firstname:'ram',
//         lastname:'stk'
//     }
// }
// ));

module.exports=app;