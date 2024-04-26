import { ProductType } from "@/entities/RestaurantCard";

export interface Dish {
  id: string;
  title: string;
  type: ProductType;
  price: number;
  rating: number;
  duration: number;
  image: string;
}