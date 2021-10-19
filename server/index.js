const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/create", (req,res)=>{

    res.json({message:'create your ballot!'})

})

app.get("api/review", (req,res)=>{

    res.json({message:'review your ballot!'})

})

app.get("/submit", (req,res) => {
    res.json({ message: "You are finished!" });
})


app.get("/api", (req,res) => {
    res.json({ message: "Hello from server!" });
})


app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, '../public/build', 'index.html'));
})

app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`);
});