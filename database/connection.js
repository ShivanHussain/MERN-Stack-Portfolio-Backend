import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.ATLAS_URL, {
      dbName: "PERSONAL_PORTFOLIO",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
