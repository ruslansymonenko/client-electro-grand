import { axiosPrivate, axiosPublic } from '@/api/api.interceptors';
import { IProduct } from '@/types/data-types/product';
import { API_URL } from '@/config/api.config';
import { IProductResponse } from '@/types/server-response-types/product-response';

enum EnumProductPaths {
  CREATE = '/create',
  GET_ALL = '/',
  GET_BY_ID = '/by-id',
  GET_BY_SLUG = '/by-slug',
  UPDATE = '/',
  SET_IMAGES = '/set-images',
  DELETE = '/',
}

interface ICreateProductData {
  name: string;
  description?: string;
  price: number;
  categoryId: number;
  subCategoryId: number;
  brandId?: number;
}

interface IUpdateProductData {
  name?: string;
  description?: string;
  price?: number;
  categoryId?: number;
  subCategoryId?: number;
  brandId?: number;
}

type TypeProductsImages = File | File[];

class ProductService {
  async create(data: ICreateProductData) {
    try {
      const response = await axiosPrivate<IProduct>({
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

  async getAll() {
    try {
      const response = await axiosPublic<IProductResponse[]>({
        url: API_URL.product(`${EnumProductPaths.GET_ALL}`),
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
      const response = await axiosPublic<IProductResponse>({
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
      const response = await axiosPublic<IProductResponse>({
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

  async update(id: number, data: IUpdateProductData) {
    try {
      const response = await axiosPrivate<IProduct>({
        url: API_URL.product(`${EnumProductPaths.UPDATE}/${id}`),
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

  async setImages(id: number, data: TypeProductsImages) {
    try {
      const response = await axiosPrivate<IProduct>({
        url: API_URL.product(`${EnumProductPaths.SET_IMAGES}/${id}`),
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
      const response = await axiosPublic<IProduct>({
        url: API_URL.product(`${EnumProductPaths.DELETE}/${id}`),
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

export const productService = new ProductService();
