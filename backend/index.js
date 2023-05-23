import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/productRoutes.js";
import mongoose from "mongoose";
import errorMiddleware from "./middleware/error.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoute from "./routes/orderRoute.js"

//Handling Uncaught exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log("Shutting down the server due to the uncaught exception ! ");
  process.exit(1);
});

dotenv.config({ path: "./config/config.env" });

//MIDDLEWARES
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(cors());

/*ROUTES*/
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", orderRoute);

//ERROR MIDDLEWARE
app.use(errorMiddleware);

//SERVER CONNECTION
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("=================================");
      console.log(`App running on port : ${PORT}`);
      console.log("=================================");
    });
  })
  .catch((error) => console.log(`${error} did not connect`));
