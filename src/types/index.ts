export interface Loan {
  id: string;
  name: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  tenureMonths: number;
  icon: string;
  benefits: string[];
  requirements: string[];
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  hours: string;
  latitude: number;
  longitude: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: number;
}

export interface Team {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
}
