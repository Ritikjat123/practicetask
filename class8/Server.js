const express = require("express");
require("dotenv").config()
const app = express();
const port = process.env.PORT || 4000;
//server start 
app.listen(process.env.PORT, () => {
    console.log(`Server run kar rha hai ${port}`)
})


// qe are gettung the data from the body we use middle 
app.use(express.json());

// db ko connect karo 
const DbConnect = require("./configuration/ConnectDB.js");
DbConnect();



// more get the data from the cookie we have to use below middleware
const cookieParser=require("cookie-parser");
app.use(cookieParser());

// demo url
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})


// mount your route

const authRoute=require("./routes/AuthRoute.js");

app.use("/api/v1/auth",authRoute)