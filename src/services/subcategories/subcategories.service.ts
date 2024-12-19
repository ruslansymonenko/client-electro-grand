import { axiosPrivate, axiosPublic } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { ISubcategory } from '@/types/data-types/subcategory';
import { ISubcategoryResponse } from '@/types/server-response-types/subcategory-response';

enum EnumSubCategoriesPaths {
  CREATE = '/',
  GET_ALL = '/',
  GET_BY_ID = '/by-id',
  GET_BY_SLUG = '/by-slug',
  UPDATE = '',
  DELETE = '',
}

export interface ICreateSubcategoryData {
  name: string;
  categoryId: number;
}

export interface IUpdateSubcategoryData {
  name?: string;
}

class SubcategoriesService {
  async create(data: ICreateSubcategoryData) {
    try {
      const response = await axiosPrivate<ISubcategoryResponse>({
        url: API_URL.subcategory(EnumSubCategoriesPaths.CREATE),
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
      const response = await axiosPublic<ISubcategoryResponse[]>({
        url: API_URL.subcategory(`${EnumSubCategoriesPaths.GET_ALL}`),
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
      const response = await axiosPublic<ISubcategoryResponse>({
        url: API_URL.subcategory(`${EnumSubCategoriesPaths.GET_BY_ID}/${id}`),
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
      const response = await axiosPublic<ISubcategoryResponse>({
        url: API_URL.subcategory(`${EnumSubCategoriesPaths.GET_BY_SLUG}/${slug}`),
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

  async update(id: number, data: IUpdateSubcategoryData) {
    try {
      const response = await axiosPrivate<ISubcategory>({
        url: API_URL.subcategory(`${EnumSubCategoriesPaths.UPDATE}/${id}`),
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
      const response = await axiosPrivate<ISubcategory>({
        url: API_URL.subcategory(`${EnumSubCategoriesPaths.DELETE}/${id}`),
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

export const subcategoriesService = new SubcategoriesService();
