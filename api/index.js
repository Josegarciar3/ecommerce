const express = require ("express");
const app = express();
const cors = require('cors')
const mongoose = require("mongoose")
const dotenv = require ("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")

app.use(cors());
dotenv.config();

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

const PORT = process.env.PORT || 5100
app.listen(PORT, () =>{
    console.log(`Server running in PORT ${PORT}`)
})


mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("--------Data base conecction sucessfull-------") )
.catch((err) =>{
    console.log(err);
});






