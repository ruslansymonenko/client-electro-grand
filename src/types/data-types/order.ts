export interface IOrder {
  id: number;
  created_at: string;
  updated_at: string;
  status: EnumOrderStatus;
}

export enum EnumOrderStatus {
  NEW = 'NEW',
  PENDING = 'PENDING',
  PAID = 'PAID',
  SHIPPED = 'SHIPPED',
  DONE = 'DONE',
}

enum EnumDeliveryType {
  NOVA_POST = 'NOVA_POST',
  UKR_POST = 'UKR_POST',
}
