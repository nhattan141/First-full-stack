import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initwebRoutes from "./routes/web";
import connectDB from "./config/connectDB";
// import cors from 'cors';

require('dotenv').config();
//Use to run process.env.PORT

let app = express();
// app.use(cors({ origin: true }));
//middleware
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.URL_REACT);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-with, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//config app
viewEngine(app);
initwebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
//if PORT === undefined => port = 6969
app.listen(port, () => {
    //callback
    console.log(">>> Backend Node js is running on the port " + port);
});
