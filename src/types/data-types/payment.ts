export interface IPayment {
  id: number;
  created_at: string;
  updated_at: string;
  amount: number;
  status: EnumPaymentStatus;
}

export enum EnumPaymentStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}
