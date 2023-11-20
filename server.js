import express from "express";
// import path from "path";
import logger from "morgan";
import cors from "cors";
import routes from "./routes/index.js";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
// app.use(express.static(path.join(new URL(import.meta.url).pathname, 'build')));


// Put API routes here, before the "catch all" route
app.use('/users', routes)
app.use('/post', routes)
app.use('/comment', routes)
app.use('/event', routes)

db.on("connected", () => {
    console.clear();
    console.log("Connected to MongoDB!");
  });

    app.listen(PORT, () => {
      process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(`Express server running in development on: ${PORT}`);
    });