import { OrderItem, OrderStatus, User } from "@prisma/client";

export interface Order {
    id: Number;
    user: User;
    userId: Number;
    items: OrderItem;
    total: Number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}