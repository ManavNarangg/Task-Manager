const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');
const routes = require("./routes/ToDoRoutes");

const PORT = process.env.port || 3000
const app = express();

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URL).
then(() => console.log("Connected to mongodb")).
catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});
