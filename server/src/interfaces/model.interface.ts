import { Product } from "@prisma/client";

export interface Model {
    id: Number;
    name: String;
    products: Product
}