
// es6
import express from "express";

const app = express()


app.get('/', (req, res) => res.send(
    {
    users:{
        firstname:'ram',
        lastname:'stk'
    }
}
));

module.exports=app;