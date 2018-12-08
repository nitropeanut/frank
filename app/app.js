import express from 'express';
import router from './routes/index';

const app = express();

app.get('/', router);

module.exports = app; 
