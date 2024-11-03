import { IProduct } from '@/types/data-types/product';
import { ICategory } from '@/types/data-types/category';
import { ISubcategory } from '@/types/data-types/subcategory';
import { IBrand } from '@/types/data-types/brand';
import { IProductAttributeResponse } from '@/types/server-response-types/product-attribute-response';

export interface IProductResponse extends IProduct {
  category: ICategory;
  subcategory: ISubcategory;
  brand: IBrand;
}

export interface IProductResponseWithPagination {
  products: IProductResponse[];
  totalProducts: number;
  totalPages: number;
  currentPage: number;
}

export interface IProductDataResponse extends IProductResponse {
  productAttribute: IProductAttributeResponse[];
  similarProducts: IProduct[];
}
