import { ProductType } from "@/entities/Restaurant";

export interface Dish {
  id: string;
  title: string;
  type: ProductType;
  price: number;
  rating: number;
  duration: number;
  image: string;
}