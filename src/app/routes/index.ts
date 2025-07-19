import { Router } from "express";
import { MangoRoutes } from "../modules/mango/mango.route";


export const router = Router();

const moduleRoutes = [
    {
        path:'/mango',
        route: MangoRoutes
    },
]

moduleRoutes.forEach((route)=>{
  router.use(route.path, route.route)
})

