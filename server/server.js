const dotenv = require("dotenv").config();
const express = require("express");
const usersRoute = require("./routes/usersRoute");
const app = express();

const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRoute);

// building default route
app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(PORT, () => {
  console.log(`Server listenig on port ${PORT}!!!`);
});
