
import express from 'express';
import bodyParser from "body-parser";
import path from "path";

import 'dotenv/config'

import configViewEngine from "./config/configViewEjs"
import { routerAdmin } from "./routers/routerAdmin";
import { routerClient } from "./routers/routerClient";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTER ----------------------------------------------------------------

app.use('/admin', routerAdmin)
app.use('/', routerClient)



app.use(express.static(path.join(__dirname, 'public')));

app.use("/uploads", express.static('uploads'))



configViewEngine(app);

const port = process.env.PORT || 6969

app.listen(port, () => {
    console.log('listening on port :', port);
})