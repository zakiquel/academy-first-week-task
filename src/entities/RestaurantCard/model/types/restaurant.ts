export enum RestaurantType {
  HEALTHY = 'Healthy',
  SUPREME = 'Supreme',
  TRENDING = 'Trending',
}
export interface Restaurant {
  id: string;
  title: string;
  image: string;
  type: RestaurantType;
  time: number;
  rating: number;
}