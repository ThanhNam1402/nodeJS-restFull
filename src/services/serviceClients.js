
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





export const serviceClient = {
    getAllProducts,
    getProductByID,
}