import { useQuery } from '@tanstack/react-query';
import { categoriesService } from '@/services/categories/categories.service';

export const useGetCategoryById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['category-by-id'],
    queryFn: () => categoriesService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetCategoryBySlug = (slug: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['category-by-slug'],
    queryFn: () => categoriesService.getBySlug(slug),
  });

  return { data, error, isLoading };
};

export const useGetAllCategories = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-categories'],
    queryFn: categoriesService.getAll,
  });

  return { data, error, isLoading };
};
