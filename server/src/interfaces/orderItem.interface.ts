import { Order, Product } from "@prisma/client";

export interface OrderItem {
    id: Number;
    order: Order;
    orderId: Number;
    product: Product;
    productId: Number;
    quantity: Number;
    price: Number
}