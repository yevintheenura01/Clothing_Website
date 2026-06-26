const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const RegRoute = require("./Routes/RegRoute");
const QuestionsRoute = require("./Routes/QuestionsRoute");
const LoginRoute = require("./Routes/LoginRoute");
const CartRoute = require("./Routes/CartRoute");
const ProductRoute = require("./Routes/ProductRoutes");
const itemRoutes = require("./Routes/itemRoutes");
const favoriteRoutes = require("./Routes/favorites");
const ForgotPasswordRoute = require("./Routes/ForgotPasswordRoute");
const cardRoute = require("./Routes/CardRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
    credentials: true,
  })
);

app.use("/upload", express.static(path.join(__dirname, "upload")));
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

app.use("/reg", RegRoute);
app.use("/questions", QuestionsRoute);
app.use("/login", LoginRoute);
app.use("/cart", CartRoute);
app.use("/products", ProductRoute);
app.use("/api/items", itemRoutes);
app.use("/favorites", favoriteRoutes);
app.use("/cards", cardRoute);
app.use("/auth", ForgotPasswordRoute);

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is required. Add it to backend/.env.");
}

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
