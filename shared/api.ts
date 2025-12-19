export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Crypto" | "Real Estate" | "Gold" | "Agriculture" | "Oil & Gas" | "Financial Services";
  image: string;
  roi: string;
  status: "Active" | "Inactive";
  showOnHome: boolean;
  isFeatured: boolean;
  minInvestment: number;
  maturityPeriod: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  joinedAt: string;
  status: "active" | "suspended";
}

export interface Order {
  id: string;
  userId: string;
  productId: string;
  amount: number;
  status: "Pending" | "Profits" | "Delivered" | "Cancelled";
  date: string;
  customerName: string;
  productName: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  isRead: boolean;
}

export interface SiteSettings {
  bankName: string;
  accountNumber: string;
  accountName: string;
  swiftCode: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  aboutUsContent: string;
  headerContent: string;
  footerContent: string;
}

export interface AdminDashboardStats {
  totalUsers: number;
  totalOrders: number;
  totalProducts: number;
  totalRevenue: number;
  pendingOrders: number;
}
