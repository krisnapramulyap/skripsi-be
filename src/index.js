const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const xss = require("xss-clean");
const helmet = require("helmet");
const compression = require("compression");
const bodyParser = require("body-parser");
const routerNavigation = require("./routes");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(morgan("dev"));
app.use(cors());
app.options("*", cors());
app.use(xss());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public")); // example read image = localhost:3001/uploads/movie/filename

app.use("/", routerNavigation);
app.use("/*", (req, res) => {
  res.status(404).send("Path not found !");
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listen in port ${port}`);
});
