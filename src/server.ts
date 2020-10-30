import express from 'express';
import usersController from '@controllers/UsersController';

const app = express();

app.get('/', usersController.get);

app.listen(3333);
