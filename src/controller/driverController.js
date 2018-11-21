import express from "express";
import * as driverService from '../service/driver';

const router = express();

router.get('/', (req, res, next) => {
  driverService
    .getAllUsers()
    .then(data => res.status(201).send({ data: data.rows }))
    .catch(err => next(err));
});

export default router;