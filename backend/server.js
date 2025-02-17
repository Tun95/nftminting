import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { createServer } from "http";
import helmet from "helmet";
import mintingRouter from "./routes/mintingRoutes.js";

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URI, {
    connectTimeoutMS: 1000000,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE",
    credentials: true,
  })
);

app.use(
  helmet({
    crossOriginOpenerPolicy: { policy: "same-origin" },
    crossOriginEmbedderPolicy: { policy: "require-corp" },
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Server is alive");
});

//Routes
app.use("/api/mint", mintingRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const server = createServer(app);
const port = process.env.PORT || 5000;

// Increase timeout settings
server.setTimeout(1000000);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
