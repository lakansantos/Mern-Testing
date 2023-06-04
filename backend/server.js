const express = require("express");
require("dotenv").config();
const cors = require("cors");
const postsRouter = require("./routes/postsRoutes");
const usersRouter = require("./routes/usersRoutes");
const db = require("./config/db");
const PORT = process.env.PORT;

db();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/v1", postsRouter);
app.use("/api/v1", usersRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
