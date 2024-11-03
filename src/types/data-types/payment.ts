export interface IPayment {
  id: number;
  createdAt: string;
  updatedAt: string;
  amount: number;
  status: EnumPaymentStatus;
}

export enum EnumPaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}
