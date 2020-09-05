import { config, https } from 'firebase-functions';
import express from 'express';
import helmet from 'helmet';
import api from './api';

const app = express();

app.use(helmet());
app.set('trust proxy', 1);
app.use('/api', api);

if ((config().constant || {}).external_url) {
  process.env.API_URL = config().constant.external_url;
}

const internalHttp = https.onRequest(app);

module.exports = internalHttp;
