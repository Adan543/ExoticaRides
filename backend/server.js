const express = require("express");

const cors = require("cors");
const cookieparser = require('cookie-parser')
const sessionMiddleware = require('./middlewares/sessionmiddleware.js');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
// Use middlewares
app.use(cors(
  {origin:['http://localhost:3000'],
  methods:['POST','GET'],credentials:true
}
));

app.use(cookieparser())
app.use(express.urlencoded({ extended: true }));

// Apply session middleware
// app.use(sessionMiddleware);

// Define routes
const settingRoutes = () => {
  const company = require('./routes/company.js');
  const user = require('./routes/user.js');
  const car = require('./routes/car.js');
  const bookings = require('./routes/bookings.js');

  app.use('/company', company);
  app.use('/user', user);
  app.use('/car', car);
  app.use('/bookings', bookings);
};

// Apply routes
settingRoutes();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Backend Server." });
});

// Start the server
try {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
} catch (err) {
  console.log(err.message);
}
