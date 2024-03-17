import { serviceAdmin } from "../services/serviceAdmin";



// list products
const handelGetAllProducts = async (req, res) => {

    try {
        let data = await serviceAdmin.getAllProducts();

        console.log(data);


        return res.render('./admin/pdList', {
            data
        })
    } catch (error) {
        console.log(error);
    }

}

// create product
const handelCreateProduct = async (req, res) => {

    try {

        let pdReq = req.body

        let thumbnail = ''

        if (req.file && req.file.filename) {
            thumbnail = req.file.filename
        }

        console.log("thumbnail", thumbnail);

        let item = { ...pdReq, thumbnail }

        console.log(item);

        let data = await serviceAdmin.createProduct(item)
        console.log(data);

        return res.redirect('/admin/products')
    } catch (error) {
        console.log(error);
    }

}


// edit pd 
const handelEditProduct = async (req, res) => {

    try {

        let pdReq = req.body
        let thumbnail = ''

        if (req.file && req.file.filename) {
            thumbnail = req.file.filename
        }

        console.log('thumbnail', thumbnail);

        let item = { ...pdReq, thumbnail }

        console.log('item', item);

        let data = await serviceAdmin.editProduct(item)
        console.log(data);

        return res.redirect('/admin/products')
    } catch (error) {
        console.log(error);
    }

}

// page Edit Product
const pageEditProduct = async (req, res) => {

    try {

        let data = await serviceAdmin.getProductByID(req.params.id)

        return res.render('./admin/pdEdit', {
            data: data.data
        })
    } catch (error) {
        console.log(error);
    }

}

// dashboard admin 
const pageDashBoard = async (req, res) => {

    try {
        return res.render('./admin/index')
    } catch (error) {
        console.log(error);
    }

}


const handelDelProduct = async (req, res) => {

    try {

        let idItem = req.params.id
        let data = await serviceAdmin.delProduct(idItem)
        console.log(data);
        return res.redirect('/admin/products')

    } catch (error) {
        console.log(error);
    }

}

export const controllerAdmin = {
    handelCreateProduct,
    handelGetAllProducts,
    pageDashBoard,
    handelDelProduct,
    pageEditProduct,
    handelEditProduct
}