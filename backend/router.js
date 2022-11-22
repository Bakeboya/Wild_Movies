require("dotenv").config();
const cors = require("cors");

const express = require("express");

const app = express();
const port = process.env.APP_PORT ?? 5000;

app.use(express.json());
app.use(cors());

const usersHandlers = require("./query");

app.get("/users", usersHandlers.getUsers);
app.get("/users/:id", usersHandlers.getUserById);
app.post("/users", usersHandlers.postUser);
app.put("/users/:id", usersHandlers.updateUserById);
// app.put("users/:id", usersHandlers.updateFavById);
app.delete("/users/:id", usersHandlers.deleteUserById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.warn(`Server is listening on ${port}`);
  }
});
