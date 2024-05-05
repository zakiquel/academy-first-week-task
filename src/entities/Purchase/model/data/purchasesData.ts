import { Purchase } from '../..';
import { PurchaseStatus } from '../types/purchase';

import food1 from "@/shared/assets/icons/food1.png";
import food2 from "@/shared/assets/icons/food2.png";
import food3 from "@/shared/assets/icons/food3.png";

export const purchase1: Purchase = {
  id: '1',
  name: 'Chicken Hell',
  img: food1,
  status: PurchaseStatus.PROCESSING,
  time: '3:09 PM'
}

export const purchase2: Purchase = {
  id: '2',
  name: 'Swe Dish',
  img: food2,
  status: PurchaseStatus.CANCELLED,
  time: 'Yesterday'
}

export const purchase3: Purchase = {
  id: '3',
  name: 'Fish Hel Veg',
  img: food3,
  status: PurchaseStatus.DELIVERED,
  time: 'Yesterday'
}