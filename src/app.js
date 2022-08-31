import express from "express";
import morgan from "morgan";
import bookRoutes from "./routes/book.routes";

const app = express();
app.set("port",5000);
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/books",bookRoutes);

export default app;