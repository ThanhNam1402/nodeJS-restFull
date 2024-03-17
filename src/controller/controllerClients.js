

import { serviceClient } from "../services/serviceClients";


const pageHome = async (req, res) => {

    try {
        return res.render('./client/')
    } catch (error) {
        console.log(error);
    }

}


// get one  products
const pageDetailProduct = async (req, res) => {

    try {

        let data = await serviceClient.getProductByID(req.params.id)

        console.log(data);

        return res.render('./client/pdDetail', {
            data: data.data
        })
    } catch (error) {
        console.log(error);
    }

}

// get all products
const pageProducts = async (req, res) => {

    try {


        let data = await serviceClient.getAllProducts()

        console.log(data);

        return res.render('./client/products', {
            data
        })
    } catch (error) {
        console.log(error);
    }

}


export const controllerClient = {
    pageHome,
    pageProducts,
    pageDetailProduct
}