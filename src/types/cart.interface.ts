import { ProductI } from "./product.interface";

export interface CartProductI {
  created_at: string;
  id: string;
  cartProduct: ProductI;
  product_id: string;
  updated_at: string;
  user_id: string;
  count: number;
}