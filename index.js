const express = require('express');
const app = express();
app.use(express.json());


const res = require("express/lib/response");
const PORT = 8080; 

app.listen(PORT, () =>{
    console.log("Server Up!");
});

app.get('/griffin-pipedrive', (req, res) =>{    
    let body = req.body;
    res.status(200).send({
        payload: body
    })
});