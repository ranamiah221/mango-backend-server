import { Router } from "express";
import { MangoController } from "./mango.controller";

const router = Router();

router.post('/create', MangoController.createMango)


export const MangoRoutes = router