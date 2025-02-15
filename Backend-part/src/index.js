import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import cookiePasser from "cookie-parser";

dotenv.config();

const app = express();

app.use(cookiePasser());
app.use(cors({
  origin: "http://localhost:3000",
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//TO PERFORM ACTIONS
app.use("/api/auth", authRouter);
//TO CONNECT WITH THE DATABASE
const dburi = process.env.DB_URI;
const connectWithDatabase = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(dburi, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (err) {
    console.error("Database connection error:", err); // Log the full error object
    process.exit(1); // Exit the process if the connection fails (important!)
  }
};
// TO START THE SERVER
const port = process.env.PORT || 8080;
app.listen(port, async () => {
  await connectWithDatabase();
  console.log(`Listening on port ${port}...`);
});
