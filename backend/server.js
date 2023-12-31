const express = require("express");

const router = require('./routes/company.js')

const app = express();
const cors = require("cors");


app.use(express.json());// parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true }));// parse requests of content-type - application/x-www-form-urlencoded
const PORT = process.env.PORT || 8080;// set port, listen for requests
app.use(cors())

//routes
const settingRoutes = () => {
  const company = require('./routes/company.js')
  const user = require('./routes/user.js')

  app.use('/company', company)
  app.use('/user',user)
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

