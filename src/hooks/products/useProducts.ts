import { useQuery } from '@tanstack/react-query';
import { productService } from '@/services/products/products.service';

export const useGetProductById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['product-by-id'],
    queryFn: () => productService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetProductsByCategory = (categorySlug: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['product-by-category'],
    queryFn: () => productService.getByCategory(categorySlug),
  });

  return { data, error, isLoading };
};

export const useGetProductsBySubcategory = (subcategorySlug: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['product-by-subcategory'],
    queryFn: () => productService.getBySubcategory(subcategorySlug),
  });

  return { data, error, isLoading };
};

export const useGetProductsByBrand = (brandSlug: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['product-by-brand'],
    queryFn: () => productService.getByBrand(brandSlug),
  });

  return { data, error, isLoading };
};

export const useGetAllProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-products'],
    queryFn: productService.getAll,
  });

  return { data, error, isLoading };
};
