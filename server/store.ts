import { Product, User, Order, Message, SiteSettings } from "../shared/api";

class Store {
  products: Product[] = [
    {
      id: "1",
      name: "Bitcoin Cloud Mining",
      description: "Institutional-grade cloud mining with 100% green energy.",
      price: 5000,
      category: "Crypto",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
      roi: "18.4%",
      status: "Active",
      showOnHome: true,
      isFeatured: true,
      minInvestment: 1000,
      maturityPeriod: "12 Months"
    },
    {
      id: "2",
      name: "Canary Wharf Tower",
      description: "Fractional ownership in a prime London residential development.",
      price: 25000,
      category: "Real Estate",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      roi: "8.5%",
      status: "Active",
      showOnHome: true,
      isFeatured: false,
      minInvestment: 5000,
      maturityPeriod: "24 Months"
    }
  ];

  users: User[] = [
    {
      id: "1",
      name: "Admin User",
      email: "admin@diverse-capital.com",
      role: "admin",
      joinedAt: new Date().toISOString(),
      status: "active"
    }
  ];

  orders: Order[] = [
    {
      id: "1",
      userId: "1",
      productId: "1",
      amount: 5000,
      status: "Profits",
      date: new Date().toISOString(),
      customerName: "Admin User",
      productName: "Bitcoin Cloud Mining"
    }
  ];

  messages: Message[] = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      subject: "Investment Inquiry",
      message: "I am interested in the Real Estate portfolio.",
      date: new Date().toISOString(),
      isRead: false
    }
  ];

  settings: SiteSettings = {
    bankName: "Global Wealth Bank",
    accountNumber: "1234567890",
    accountName: "Diverse Capital Group",
    swiftCode: "GWBLUK22",
    contactEmail: "support@diverse-capital.com",
    contactPhone: "+44 20 1234 5678",
    contactAddress: "123 Financial District, London, EC2V 6BT, UK",
    aboutUsContent: "Diverse Capital is a leading investment platform...",
    headerContent: "Empowering Your Financial Future",
    footerContent: "© 2024 Diverse Capital Group. All rights reserved."
  };
}

export const store = new Store();
