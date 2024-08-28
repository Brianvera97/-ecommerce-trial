import { Category, OrderItem } from "@prisma/client";

export interface Product {
    id: Number;
    name: String;
    description: String;
    price: Number;
    imgUrl: String;
    stock: Number;
    categories: Category;
    orderItems: OrderItem;
    createdAt: Date;
    updatedAt: Date
}