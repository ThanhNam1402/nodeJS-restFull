
import pool from "../config/connectDB";

// get all 
const getAllProducts = async () => {
    try {

        try {
            const [rows, fields] = await pool.query('SELECT * FROM `products` ORDER BY id desc');
            return rows
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }
}

// add
const createProduct = async (pdReq) => {
    try {
        let res = {}
        try {

            console.log(pdReq);

            const [rows, fields] = await pool.query(
                `INSERT INTO products(name, thumbnail, price, sale_price, des) values("${pdReq.name}","${pdReq.thumbnail}", ${Number(pdReq.price)}, ${Number(pdReq.sale_price)}, "${pdReq.des}")`
            );

            console.log(rows);

            if (rows) {
                res.success = true
                res.message = 'Tạo Thành Công !!'
            } else {
                res.success = false
                res.message = 'Error : Lỗi Khi Thêm Tài Nguyên'
            }

            return res
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }
}


// edit 

const editProduct = async (pdReq) => {
    try {


        let res = {}
        try {

            console.log("pdReq", pdReq);

            let img = ''
            if (pdReq && pdReq.thumbnail == '') {
                const [rows, fields] = await pool.query(
                    `SELECT thumbnail FROM products WHERE id = ${pdReq.id}`
                );

                console.log("thumbnail", rows);

                img = rows[0].thumbnail

                console.log(img);

            } else {
                img = pdReq.thumbnail
            }


            const [rows, fields] = await pool.query(
                `UPDATE products SET name = ?, thumbnail = ?, price = ? , sale_price = ? , des = ? WHERE id = ?`, [pdReq.name, img, Number(pdReq.price), Number(pdReq.sale_price), pdReq.des, Number(pdReq.id)]
            );

            if (rows) {
                res.success = true
                res.message = 'Tạo Thành Công !!'
            } else {
                res.success = false
                res.message = 'Error : Lỗi Khi Thêm Tài Nguyên'
            }

            return res
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }
}

// get one
const getProductByID = async (id) => {
    try {

        try {

            let res = {}
            const [rows, fields] = await pool.query(
                `SELECT * FROM products WHERE id = ${id}`
            );

            console.log(rows);

            if (rows) {
                res.data = rows[0]
                res.success = true
                res.message = 'success'
            } else {
                res.success = false
                res.message = 'Error : Lỗi Tài Nguyên'
            }
            return res
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }
}

// del 

const delProduct = async (id) => {
    try {

        try {

            let res = {}
            const [rows, fields] = await pool.query(
                `DELETE FROM products WHERE id = ${id} ;`
            );

            if (rows) {
                res.success = true
                res.message = 'Xóa Thành Công !!'
            } else {
                res.success = false
                res.message = 'Error : Lỗi Khi Xóa Tài Nguyên'
            }
            return res
        } catch (error) {
            console.log(error);
        }

    } catch (error) {
        console.log(error);
    }
}




export const serviceAdmin = {
    getAllProducts,
    createProduct,
    delProduct, getProductByID, editProduct
}