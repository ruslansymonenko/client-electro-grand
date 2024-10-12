import { IProduct } from '@/types/data-types/product';
import { ICategory } from '@/types/data-types/category';
import { ISubcategory } from '@/types/data-types/subcategory';

export interface IProductResponse extends IProduct {
  category: ICategory;
  subcategory: ISubcategory;
}
