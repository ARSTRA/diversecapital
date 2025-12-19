import { RequestHandler } from "express";
import { store } from "../store";

// Products
export const getProducts: RequestHandler = (req, res) => {
  res.json(store.products);
};

export const updateProduct: RequestHandler = (req, res) => {
  const { id } = req.params;
  const index = store.products.findIndex((p) => p.id === id);
  if (index !== -1) {
    store.products[index] = { ...store.products[index], ...req.body };
    res.json(store.products[index]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

export const createProduct: RequestHandler = (req, res) => {
  const newProduct = {
    ...req.body,
    id: Math.random().toString(36).substr(2, 9),
  };
  store.products.push(newProduct);
  res.status(201).json(newProduct);
};

export const deleteProduct: RequestHandler = (req, res) => {
  const { id } = req.params;
  store.products = store.products.filter((p) => p.id !== id);
  res.status(204).send();
};

// Orders
export const getOrders: RequestHandler = (req, res) => {
  res.json(store.orders);
};

export const updateOrder: RequestHandler = (req, res) => {
  const { id } = req.params;
  const index = store.orders.findIndex((o) => o.id === id);
  if (index !== -1) {
    store.orders[index] = { ...store.orders[index], ...req.body };
    res.json(store.orders[index]);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
};

// Users
export const getUsers: RequestHandler = (req, res) => {
  res.json(store.users);
};

export const deleteUser: RequestHandler = (req, res) => {
  const { id } = req.params;
  store.users = store.users.filter((u) => u.id !== id);
  res.status(204).send();
};

// Settings
export const getSettings: RequestHandler = (req, res) => {
  res.json(store.settings);
};

export const updateSettings: RequestHandler = (req, res) => {
  store.settings = { ...store.settings, ...req.body };
  res.json(store.settings);
};

// Messages
export const getMessages: RequestHandler = (req, res) => {
  res.json(store.messages);
};

export const updateMessage: RequestHandler = (req, res) => {
  const { id } = req.params;
  const index = store.messages.findIndex((m) => m.id === id);
  if (index !== -1) {
    store.messages[index] = { ...store.messages[index], ...req.body };
    res.json(store.messages[index]);
  } else {
    res.status(404).json({ message: "Message not found" });
  }
};
