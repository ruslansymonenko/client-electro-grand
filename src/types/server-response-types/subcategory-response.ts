import { ISubcategory } from '@/types/data-types/subcategory';
import { ICategory } from '@/types/data-types/category';

export interface ISubcategoryResponse extends ISubcategory {
  category: ICategory;
}
