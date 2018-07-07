const express = require("express");
const bp = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const app = express();
require("dotenv").config();
const mconns = massive(process.env.CONNECTION_STRING);
// controller
app.use(bp.json());
app.use(cors());

const port = 3006;
app.listen(port, () => console.log(port));
