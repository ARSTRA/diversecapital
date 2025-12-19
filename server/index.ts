import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import * as adminRoutes from "./routes/admin";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Admin API routes
  app.get("/api/products", adminRoutes.getProducts);
  app.post("/api/products", adminRoutes.createProduct);
  app.put("/api/products/:id", adminRoutes.updateProduct);
  app.delete("/api/products/:id", adminRoutes.deleteProduct);

  app.get("/api/orders", adminRoutes.getOrders);
  app.put("/api/orders/:id", adminRoutes.updateOrder);

  app.get("/api/users", adminRoutes.getUsers);
  app.delete("/api/users/:id", adminRoutes.deleteUser);

  app.get("/api/messages", adminRoutes.getMessages);
  app.put("/api/messages/:id", adminRoutes.updateMessage);

  app.get("/api/settings", adminRoutes.getSettings);
  app.put("/api/settings", adminRoutes.updateSettings);

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  return app;
}
