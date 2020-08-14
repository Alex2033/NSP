/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import 'zone.js/dist/zone-node';

import {ngExpressEngine} from '@nguniversal/express-engine';
import * as express from 'express';
import {join} from 'path';
import {AppServerModule} from './src/main.server';
import {APP_BASE_HREF} from '@angular/common';
import {existsSync} from 'fs';
import {REQUEST, RESPONSE} from '@nguniversal/express-engine/tokens';
import {environment} from './src/environments/environment';

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/nsp/browser/ru');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)

  server.engine('html', (_, options: any, callback) =>
    ngExpressEngine({
      bootstrap: AppServerModule,
    })(_, options, callback)
  );


  server.set('view engine', 'html');
  server.set('views', distFolder);

  server.get('/robots.txt', (req, res) => {  // Отдельный метод чтобы не было maxAge
    res.sendFile(distFolder + '/robots.txt');
  });

  server.get('/rss', (req, res) => {
    // Скачивает RSS и отдает её, редирект не нравится яндекс новостям
    const https = require('https');
    const request = https.get(environment.apiHost + '/rss', (response) => {
      res.set(response.headers);
      const body = [];
      response.on('data', (chunk) => {
        body.push(chunk);
      });
      response.on('end', () => {
        res.send(Buffer.concat(body).toString());
      });
    });
  });

  // Example Express Rest API endpoints
  // app.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml,
      {
        req,
        providers: [
          {
            provide: APP_BASE_HREF,
            useValue: req.baseUrl
          },
          {provide: REQUEST, useValue: req},
          {provide: RESPONSE, useValue: res}
        ]
      }
    );
  });

  return server;
}

function run() {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
