import express from "express";
import multer from 'multer'

import { controllerAdmin } from "../controller/controllerAdmin";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})


const upload = multer({ storage: storage })

const router = express.Router();

router.get('/', controllerAdmin.pageDashBoard)

// list
router.get('/products', controllerAdmin.handelGetAllProducts)

// add 
router.post('/addProduct', upload.single('thumbnail'), controllerAdmin.handelCreateProduct)

// del
router.post('/delProduct/:id', controllerAdmin.handelDelProduct)

// edit 
router.post('/editProduct', upload.single('thumbnail'), controllerAdmin.handelEditProduct)

// get one 
router.get('/product/:id', controllerAdmin.pageEditProduct)

export const routerAdmin = router