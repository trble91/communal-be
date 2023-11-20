import mongoose from "mongoose";

mongoose.Promise = Promise;

const url =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/communal";

// mongoose.set("returnOriginal", false);

let mongooseConfig = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(url, mongooseConfig)
  .then(instance =>
    console.log("We're connected!!")
  )
  .catch(err => console.log("Connection Failed.", err));
//   .catch((error) => console.log("error connecting to MongoDB", error.message));

// mongoose.connection.on("disconnected", () =>
//   console.log("Disconnected from MongoDB")
// );

// mongoose.connection.on("error", (error) =>
//   console.error(`mongoDB connection error: ${error}`)
// );

export default mongoose;
