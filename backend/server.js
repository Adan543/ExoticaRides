const express = require("express");

const router = require('./routes/company.js')

const app = express();

app.use(express.json());// parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true }));// parse requests of content-type - application/x-www-form-urlencoded
const PORT = process.env.PORT || 8080;// set port, listen for requests


//routes
const settingRoutes = () => {
  const company = require('./routes/company.js')


  app.use('/company', company)
}



try {
  settingRoutes();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
} catch (err) {
  console.log(err.message);
}










// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Backend Server ." });
});

