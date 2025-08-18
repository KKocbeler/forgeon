import type { Product } from "./AddedProductTypes";

export interface Address  {
  id: string;
  title: string;
  addressLine: string;
  city: string;
  district: string;
  zipCode?: string;
  country: string;
  isDefault: boolean;
};

export interface Order  {
  orderId: string;
  orderDate: string;
  status: "tamamlandı" | "hazırlanıyor" | "iptal edildi";
  totalPrice: number;
  items: Product[];
  shippingAddressId: string;
  paymentMethod: string;
};

export interface User  {
  id: string;
  name: string;
  lastname: string;
  email: string;
  gender: string;
  birthday: string;
  phone: string;
  createdAt: string;
  profileImage?: string;
  favorites: string[];
  addresses: Address[];
  orders: Order[];
};
