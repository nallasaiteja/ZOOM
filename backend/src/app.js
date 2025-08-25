import express from "express";

import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import cors from "cors";

import {connectToSocket} from "./controllers/socketManager.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.set("port", (process.env.PORT || 3000));

app.get("/home", (req, res) => {
  res.send("Hello World!");
});

const start = async () => {
    const connectionDb = await mongoose.connect("mongodb+srv://nallasaitejagupta:5MKX0eUkFvDate4Q@cluster0.5dewu8e.mongodb.net/");
    server.listen(app.get("port"), () => {
        console.log("Server is running on port 3000");
    });
};

start();