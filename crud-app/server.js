const express = require("express");
const mongoose = require("mongoose"); 

const routes = require("./routes/routes")
// Connect to MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/mongo").then(() => {
   const app = express();
   app.use(express.json())
   //use the routes
   app.use("/emp",routes);
   
   app.listen(5000, () => {
      console.log("Server has started!");
   });
});
