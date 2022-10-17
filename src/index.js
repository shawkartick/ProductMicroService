import cors from "cors";
import express, { json, urlencoded } from "express";
import { ENDPOINT } from "./constant/constant";
import productRoutes from "./routes/productRoutes";
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// simple route
app.get(ENDPOINT.PRODUCT_HEALTHCHECK, (req, res) => {
  res.json({ message: "Product Microservice API is up and running" });
});

app.use(ENDPOINT.BASE_URL_V1, [productRoutes]);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}.`);
});
