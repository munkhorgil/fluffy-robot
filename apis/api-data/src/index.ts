import dotenv from 'dotenv';
import express from "express";

dotenv.config();

const { PORT } = process.env;

const app = express();

app.get("/", (_, res) => {
  res.send("There is no place like 127.0.0.1");
});

app.listen(PORT, () => {
  // tslint:disable-next-line: no-console
  console.log("Server listening on port 3500");
});
