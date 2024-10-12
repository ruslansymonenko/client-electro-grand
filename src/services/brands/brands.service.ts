import { axiosPrivate, axiosPublic } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IBrand } from '@/types/data-types/brand';

enum EnumBrandsPaths {
  CREATE = '/create',
  GET_ALL = '/',
  GET_BY_ID = '/by-id',
  GET_BY_SLUG = '/by-slug',
  UPDATE = '/',
  DELETE = '/',
}

interface ICreateBrandData {
  name: string;
}

interface IUpdateBrandData {
  name?: string;
}

class BrandsService {
  async create(data: ICreateBrandData) {
    try {
      const response = await axiosPrivate<IBrand>({
        url: API_URL.brand(EnumBrandsPaths.CREATE),
        method: 'POST',
        data: data,
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async getAll() {
    try {
      const response = await axiosPublic<IBrand[]>({
        url: API_URL.brand(`${EnumBrandsPaths.GET_ALL}`),
        method: 'GET',
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async getById(id: number) {
    try {
      const response = await axiosPublic<IBrand>({
        url: API_URL.brand(`${EnumBrandsPaths.GET_BY_ID}/${id}`),
        method: 'GET',
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async getBySlug(slug: string) {
    try {
      const response = await axiosPublic<IBrand>({
        url: API_URL.brand(`${EnumBrandsPaths.GET_BY_SLUG}/${slug}`),
        method: 'GET',
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async update(id: number, data: IUpdateBrandData) {
    try {
      const response = await axiosPrivate<IBrand>({
        url: API_URL.brand(`${EnumBrandsPaths.UPDATE}/${id}`),
        method: 'PUT',
        data: data,
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async delete(id: number) {
    try {
      const response = await axiosPublic<IBrand>({
        url: API_URL.brand(`${EnumBrandsPaths.DELETE}/${id}`),
        method: 'GET',
      });

      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error.message;
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
}

export const brandsService = new BrandsService();
