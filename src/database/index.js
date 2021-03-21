const mongoose = require("mongoose");

const uri = "mongodb+srv://ruan:ruan@ruan.r0eni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(uri, {useUnifiedTopology: true,useNewUrlParser: true}).then(()=>{console.log('Connected')});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
    console.log("Connection Successful!");
});
