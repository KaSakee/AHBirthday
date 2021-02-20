import path from "path";
import express from "express";
import exphbs from "express-handlebars"
const app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

import httpModule from "http";
const http = httpModule.Server(app);

import { createRequire } from "module";

const require = createRequire(import.meta.url);
require("dotenv").config({
  path: path.resolve(process.cwd(), ".env"),
});

import { ListenToPort } from './InitServer/listenToPort.mjs';
import { routes } from "./API/routes.mjs"

(async () => {
  app.use('/static', express.static("./Static"))

  routes(app);

  ListenToPort(http, path);

})()
