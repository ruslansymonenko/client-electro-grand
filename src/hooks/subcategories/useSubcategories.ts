import { useQuery } from '@tanstack/react-query';
import { subcategoriesService } from '@/services/subcategories/subcategories.service';

export const useGetSubcategoryById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['subcategory-by-id'],
    queryFn: () => subcategoriesService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetSubcategoryBySlug = (slug: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['subcategory-by-slug'],
    queryFn: () => subcategoriesService.getBySlug(slug),
  });

  return { data, error, isLoading };
};

export const useGetAllSubcategories = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-subcategories'],
    queryFn: subcategoriesService.getAll,
  });

  return { data, error, isLoading };
};
