import express from "express";
import data from "./initialState";
import dotenv from "dotenv";
import webpack from "webpack";
dotenv.config();

const { ENV, PORT } = process.env;
const app = new express();

if (ENV === "development") {
  console.log("development config");
  const webpackConfig = require("../webpack.config");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      serverSideRender: true,
      index: true,
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="assets/app.css" type="text/css"/> 
      <title>Platzi Video</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
    <script src="app.js" type="text/javascript"></script>
  </html>`);
});
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
