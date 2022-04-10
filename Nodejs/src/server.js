import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initwebRoutes from "./routes/web"
require('dotenv').config();
//Use to run process.env.PORT

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//config app
viewEngine(app);
initwebRoutes(app);

let port = process.env.PORT || 6969;
//if PORT === undefined => port = 6969
app.listen(port, () => {
    //callback
    console.log(">>> Backend Node js is running on the port " + port);
});
