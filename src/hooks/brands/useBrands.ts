import { useQuery } from '@tanstack/react-query';
import { brandsService } from '@/services/brands/brands.service';

export const useGetBrandById = (id: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['brand-by-id'],
    queryFn: () => brandsService.getById(id),
  });

  return { data, error, isLoading };
};

export const useGetBrandBySlug = (slug: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['brand-by-slug'],
    queryFn: () => brandsService.getBySlug(slug),
  });

  return { data, error, isLoading };
};

export const useGetAllBrands = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['all-brands'],
    queryFn: brandsService.getAll,
  });

  return { data, error, isLoading };
};
