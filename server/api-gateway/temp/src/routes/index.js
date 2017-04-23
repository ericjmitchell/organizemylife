import combineRouters from "koa-combine-routers";

//controllers
import foodRouter from ".routes/food";

const router = combineRouters([
  foodRouter
])

export default router