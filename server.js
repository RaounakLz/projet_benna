const express = require("express");
const cors = require("cors")
require("dotenv").config();
const passport = require("passport");


const app = express();

app.use(cors())

app.use(express.json()) 

const dbconnect=require("./config/dbconnect");
dbconnect();



app.use("/produit", require("./routes/produitRouter"))
app.use("/commande", require("./routes/commandeRouter"))
app.use("/client", require("./routes/clientRouter"))
app.use("/contact", require("./routes/contactRouter"))



app.use(passport.initialize());

app.listen(process.env.PORT, {useNewUrlParser: true, useUnifiedTopology: true},(err)=>err?console.log(err):console.log('server is running'))