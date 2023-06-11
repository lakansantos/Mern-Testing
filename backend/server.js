const express = require("express");
require("dotenv").config();
const cors = require("cors");
const postsRouter = require("./routes/postsRoutes");
const usersRouter = require("./routes/usersRoutes");
const authRouter = require("./routes/authRoutes");
const db = require("./config/db");
const PORT = process.env.PORT;

db();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5173/",
  })
);

app.use("/api/v1", postsRouter);
app.use("/api/v1", usersRouter);
app.use("/api/v1", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
