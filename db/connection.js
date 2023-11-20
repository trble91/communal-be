import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGO_URL || "mongodb://localhost:27017/communal";

mongoose.set("returnOriginal", false);

let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(MONGODB_URI, mongooseConfig)
  .catch((error) => console.log("error connecting to MongoDB", error.message));

mongoose.connection.on("disconnected", () =>
  console.log("Disconnected from MongoDB")
);

mongoose.connection.on("error", (error) =>
  console.error(`mongoDB connection error: ${error}`)
);

export default mongoose.connection;
