import { IProduct } from '@/types/data-types/product';

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
