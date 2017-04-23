import Koa from 'koa';
import route from 'koa-route';
import logger from 'koa-logger';
import cors from "kcors";
import bodyParser from "koa-bodyparser";
import router from "./routes";

const port = process.env.PORT || 4000;

const app = new Koa()
  .use(logger())
  .use(cors())
  .use(bodyParser())
  .use(router)
  .listen(port);
console.log(`Listening on Port ${port}`);
