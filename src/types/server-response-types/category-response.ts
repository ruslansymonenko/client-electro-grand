import { ICategory } from '@/types/data-types/category';
import { ISubcategory } from '@/types/data-types/subcategory';

export interface ICategoryResponse extends ICategory {
  subcategories: ISubcategory[];
}
