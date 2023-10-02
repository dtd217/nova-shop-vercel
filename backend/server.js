import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDatabase from "./config/mongodb.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";

// Configure env
dotenv.config();

// MongoDB connect
connectDatabase();

// Rest object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../frontend/build")));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Rest API
app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
})

// PORT
const port = process.env.PORT || 5000;

// Run listen
app.listen(port, () => {
    console.log(`Server is running in port ${port}`.bgCyan.white);
})