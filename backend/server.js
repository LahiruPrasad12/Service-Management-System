const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const dotenv = require("dotenv");
require("dotenv").config();

/*---------------------------------------Set Up Server-------------------------------------------*/
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}));

const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server start on port : ${PORT}`)
})



/*---------------------------------------connect to mongoDB-------------------------------------------*/
    //Type 01
const URL= process.env.MONGO_CONNECT;

mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
})
const connection =mongoose.connection;
connection.once("open", ()=>{
    console.log("connection success")
})

/*---------------------------------------Create Routes-------------------------------------------*/

// Service list mannager routes
app.use("/repair", require("./routes/service-list-manager/repair-details-route"));
app.use("/feedback", require("./routes/service-list-manager/feedback-route"));



// Employee manager routes 
app.use("/employee", require("./routes/employee-manager/EmployeeRoute"));
app.use("/attendant", require("./routes/employee-manager/AttendentSheetRoute"));







