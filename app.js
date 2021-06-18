const express = require("express");
const app = express();
const PORT  = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("IMAP Home")
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})