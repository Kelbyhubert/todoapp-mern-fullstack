const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

const todoRoute = require("./routes/todoRouter")

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.get("/", (req,res) => {
    res.json({message: "hello"});
});

app.use('/api/todos',todoRoute)

app.listen(port , () => {
    console.log(`listening to port ${port}`)
});
