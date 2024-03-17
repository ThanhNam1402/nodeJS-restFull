import express from "express";
import { controllerClient } from "../controller/controllerClients";

const router = express.Router();

router.get('/', controllerClient.pageHome)
router.get('/products', controllerClient.pageProducts)
router.get('/product/:id', controllerClient.pageDetailProduct)


export const routerClient = router