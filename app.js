const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors =  require("cors");
const PORT = 5000;

const AppRouter = require("./routes/AppRouter.js")
//enable the cors
app.use(cors());
//middleware to parse the json data
app.use(express.json());
/* middleware to parse the url encoded data like form data .
 The extended:false option specifies that the URL-encoded 
data should be parsed using the built-in querystring library of Node.js. */
app.use(express.urlencoded({extended:false}))

app.use("/api", AppRouter)
//app.use("/api",AppRouter)
//for local
// const MONGO_DB_URI = "mongodb://127.0.0.1:27017/batch02April";      ""
//for atlas connection
const password = encodeURIComponent("zomato");

const MONGO_DB_URI = `mongodb+srv://mishraadarsh602:${password}@cluster0.u4tfcf4.mongodb.net/zomato?retryWrites=true&w=majority`;
mongoose.connect(MONGO_DB_URI).then(() => {
    console.log("connected to db successfully");

    app.listen(PORT, () => {
        console.log("running on port 5000")
    })
}).catch((error) => {
    console.log(error);
})

