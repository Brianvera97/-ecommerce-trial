import { Order } from "@prisma/client";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  document: string;
  createdAt: Date;
  isDelete: boolean;
  orders: Order
}
