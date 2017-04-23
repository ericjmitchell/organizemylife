'use strict';

import Koa from 'koa';

import middleware from './middleware';
//import auth from './auth';
import api from './api';

const app = new Koa();

app.keys = ['secret'];

app.use(middleware());
//app.use(auth());
app.use(api());
app.use(async (ctx) => {
  console.log("404 set");
  ctx.status = 404;
});

export default app;
