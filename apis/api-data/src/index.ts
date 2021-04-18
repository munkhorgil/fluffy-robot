import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  // tslint:disable-next-line: no-console
  console.log("Server listening on port 3000!");
});
