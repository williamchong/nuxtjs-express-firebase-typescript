import path from 'path';
import { https, config } from 'firebase-functions';
import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { loadNuxt } from 'nuxt';
// TODO: use nuxt-start

let debug = false;

if ((config().constant || {}).external_url) {
  process.env.API_URL = config().constant.external_url;
}

if ((config().constant || {}).network === 'rinkeby') {
  process.env.IS_TESTNET = 'TRUE';
  debug = true;
}

if ((config().sentry || {}).report_uri) {
  process.env.SENTRY_REPORT_URI = config().sentry.report_uri;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let nuxt: any;

const app = express();
app.use(helmet());
app.use(cookieParser());
app.use(async (req, res) => {
  if (!nuxt) {
    nuxt = await loadNuxt({
      rootDir: path.join(__dirname, '../'),
      configOverrides: {
        debug,
        dev: false,
        buildDir: 'nuxt',
      },
      for: 'start',
    });
  }
  await nuxt.ready();
  nuxt.render(req, res);
});

module.exports = https.onRequest(app);
