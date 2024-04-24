export enum PurchaseStatus {
  DELIVERED = 'Delivered',
  CANCELLED = 'Cancelled',
  PROCESSING = 'On The Way',
}

export interface Purchase {
  id: string;
  name: string;
  img: string;
  status: PurchaseStatus;
  time: string;
}