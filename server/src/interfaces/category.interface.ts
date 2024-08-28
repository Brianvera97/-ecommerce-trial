import { Product } from "@prisma/client";

export interface Category {
    id: Number;
    name: String;
    products: Product
}