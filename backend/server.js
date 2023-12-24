const express = require("express");
const router = require('./routes/company_router.js')

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api',router)


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Backend Server ." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});