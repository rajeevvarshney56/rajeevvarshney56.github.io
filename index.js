const path = require("path");
const express = require("express");
const app = express();
const port = 8000;
console.log(path.join(__dirname,"public"));
const staticPath = path.join(__dirname,"public");
app.use(express.static(staticPath));

app.get("/", (req,res)=>{
    res.send("Application is running");
});

app.listen(port,()=>{
    console.log(`server is running at port number ${port}`);
});