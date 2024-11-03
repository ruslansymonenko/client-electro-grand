import { IFiltersSlice } from '@/store/slices/filterSlice';

export function buildSearchParams(filters: IFiltersSlice): string {
  const params: Record<string, string> = {};

  if (filters.minPrice !== null) params.minPrice = filters.minPrice.toString();
  if (filters.maxPrice !== null) params.maxPrice = filters.maxPrice.toString();
  if (filters.category) params.category = filters.category.join(',');
  if (filters.subcategory) params.subcategory = filters.subcategory.join(',');
  if (filters.brand) params.brand = filters.brand.join(',');

  params.currentPage = filters.currentPage.toString();
  params.pageSize = filters.pageSize.toString();

  const searchParams = new URLSearchParams(params);
  return searchParams.toString();
}
