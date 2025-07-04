const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const mongoDBConnection = require("./dbConfig/config");

const url = process.env.DB_CONNECTION_URL;
mongoDBConnection(url);
console.log("DB_CONNECTION_URL:", url); 


const app = express();
app.use(express.json());
app.use(cors()); 
app.use(express.urlencoded({extended:true}));

const productsRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const userRoutes = require("./routes/user");

app.use("/products",productsRoutes);
app.use("/users",userRoutes);
app.use("/cart",cartRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on ${PORT} `));

