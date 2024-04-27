export enum ProductType {
  HEALTHY = 'Healthy',
  SUPREME = 'Supreme',
  TRENDING = 'Trending',
}
export interface Restaurant {
  id: string;
  title: string;
  image: string;
  type: ProductType;
  time: number;
  rating: number;
}