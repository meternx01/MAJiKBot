const express = require("express");
const bodyParser - require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use(express.static("client/build"));


app.listen(PORT, function(){
    console.log("API SERVER NOW RUNNING ON PORT $(PORT)!");
});