const express = require("express");
const app = express();
const bugsRoute = require("./routes/bugRoute");
const routeNotFound = require("./middleware/errorHandle");
const cors = require("cors");
app.use(cors()); //* origin
app.use(express.json());
require("./startup/db")(); //db connection
app.use("/bugs", bugsRoute);
app.use("/weather-api", require("./routes/weatherApi")); //integrate weather api
app.use(routeNotFound);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`server is running on ${port}`));