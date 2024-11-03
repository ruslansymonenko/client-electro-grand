import { axiosPrivate, axiosPublic } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { ICategory } from '@/types/data-types/category';
import { ICategoryResponse } from '@/types/server-response-types/category-response';

enum EnumCategoriesPaths {
  CREATE = '/',
  GET_ALL = '/',
  GET_BY_ID = '/by-id',
  GET_BY_SLUG = '/by-slug',
  UPDATE = '',
  DELETE = '',
}

export interface ICreateCategoryData {
  name: string;
}

export interface IUpdateCategoryData {
  name?: string;
}

class CategoriesService {
  async create(data: ICreateCategoryData) {
    try {
      const response = await axiosPrivate<ICategoryResponse>({
        url: API_URL.category(EnumCategoriesPaths.CREATE),
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
      const response = await axiosPublic<ICategoryResponse[]>({
        url: API_URL.category(`${EnumCategoriesPaths.GET_ALL}`),
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
      const response = await axiosPublic<ICategoryResponse>({
        url: API_URL.category(`${EnumCategoriesPaths.GET_BY_ID}/${id}`),
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
      const response = await axiosPublic<ICategoryResponse>({
        url: API_URL.category(`${EnumCategoriesPaths.GET_BY_SLUG}/${slug}`),
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

  async update(id: number, data: IUpdateCategoryData) {
    try {
      const response = await axiosPrivate<ICategoryResponse>({
        url: API_URL.category(`${EnumCategoriesPaths.UPDATE}/${id}`),
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
      const response = await axiosPrivate<ICategory>({
        url: API_URL.category(`${EnumCategoriesPaths.DELETE}/${id}`),
        method: 'DELETE',
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

export const categoriesService = new CategoriesService();
