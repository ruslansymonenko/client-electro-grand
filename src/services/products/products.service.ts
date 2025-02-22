import { axiosPrivate, axiosPublic } from '@/api/api.interceptors';
import { IProduct } from '@/types/data-types/product';
import { API_URL } from '@/config/api.config';
import {
  IProductDataResponse,
  IProductResponse,
  IProductResponseWithPagination,
} from '@/types/server-response-types/product-response';
import axios from 'axios';

const EnumProductPaths = {
  CREATE: '/',
  GET_ALL: '/',
  GET_BY_ID: '/by-id',
  GET_BY_SLUG: '/by-slug',
  GET_BY_CATEGORY: '/by-category',
  GET_BY_SUBCATEGORY: '/by-subcategory',
  GET_BY_BRAND: '/by-brand',
  UPDATE: '',
  SET_IMAGES: '/set-images',
  DELETE: '',
} as const;

export interface ICreateProductData {
  name: string;
  description?: string;
  price: number;
  categoryId: number;
  subcategoryId: number;
  brandId: number;
}

export interface IUpdateProductData {
  name?: string;
  description?: string;
  price?: number;
  categoryId?: number;
  subcategoryId?: number;
  brandId?: number;
}

export type TypeProductsImages = File[];

class ProductService {
  async create(data: ICreateProductData) {
    try {
      const response = await axiosPrivate<IProductResponse>({
        url: API_URL.product(EnumProductPaths.CREATE),
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

  async getAll(searchParams?: string) {
    try {
      console.log(searchParams);

      const response = await axiosPublic<IProductResponseWithPagination>({
        url: API_URL.product(
          `${EnumProductPaths.GET_ALL}${searchParams ? `?${searchParams}` : ''}`,
        ),
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
      const response = await axiosPublic<IProductDataResponse>({
        url: API_URL.product(`${EnumProductPaths.GET_BY_ID}/${id}`),
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
      const response = await axiosPublic<IProductDataResponse>({
        url: API_URL.product(`${EnumProductPaths.GET_BY_SLUG}/${slug}`),
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

  async getByCategory(slug: string) {
    try {
      const response = await axiosPublic<IProductResponseWithPagination>({
        url: API_URL.product(`${EnumProductPaths.GET_BY_CATEGORY}/${slug}`),
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

  async getBySubcategory(slug: string) {
    try {
      const response = await axiosPublic<IProductResponseWithPagination>({
        url: API_URL.product(`${EnumProductPaths.GET_BY_SUBCATEGORY}/${slug}`),
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

  async getByBrand(slug: string) {
    try {
      const response = await axiosPublic<IProductResponseWithPagination>({
        url: API_URL.product(`${EnumProductPaths.GET_BY_BRAND}/${slug}`),
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

  async update(id: number, data: IUpdateProductData) {
    try {
      const response = await axiosPrivate<IProductResponse>({
        url: API_URL.product(`${EnumProductPaths.UPDATE}/${id}`),
        method: 'PUT',
        data: data,
      });

      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const serverMessage = error.response.data.message || 'Unknown server error';
        throw new Error(serverMessage);
      } else if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async setImages(id: number, data: TypeProductsImages) {
    try {
      const formData = new FormData();

      data.forEach((file, index) => {
        formData.append(`files`, file);
      });

      const response = await axiosPrivate<IProductResponse>({
        url: API_URL.product(`${EnumProductPaths.SET_IMAGES}/${id}`),
        method: 'PUT',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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
      const response = await axiosPrivate<IProduct>({
        url: API_URL.product(`${EnumProductPaths.DELETE}/${id}`),
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

export const productService = new ProductService();
