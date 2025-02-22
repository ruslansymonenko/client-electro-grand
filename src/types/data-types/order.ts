export interface IOrder {
  id: number;
  createdAt: string;
  updatedAt: string;
  status: EnumOrderStatus;
}

export enum EnumOrderStatus {
  NEW = 'NEW',
  PENDING = 'PENDING',
  PAID = 'PAID',
  SHIPPED = 'SHIPPED',
  DONE = 'DONE',
}

// enum EnumDeliveryType {
//   NOVA_POST = 'NOVA_POST',
//   UKR_POST = 'UKR_POST',
// }
