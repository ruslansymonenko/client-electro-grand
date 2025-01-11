import { axiosPrivate } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';
import { IUserResponse } from '@/types/server-response-types/user-response';

enum EnumBrandsPaths {
  GET_ALL = '/get-all',
  GET_BY_ID = '/by-id',
  UPDATE = '',
  DELETE = '',
}

class UsersService {
  async getAll() {
    try {
      const response = await axiosPrivate<IUserResponse[]>({
        url: API_URL.users(`${EnumBrandsPaths.GET_ALL}`),
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
      const response = await axiosPrivate<IUserResponse>({
        url: API_URL.users(`${EnumBrandsPaths.GET_BY_ID}/${id}`),
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

  // async update(id: number, data: IUpdateBrandData) {
  //   try {
  //     const response = await axiosPrivate<IBrand>({
  //       url: API_URL.brand(`${EnumBrandsPaths.UPDATE}/${id}`),
  //       method: 'PUT',
  //       data: data,
  //     });
  //
  //     return response;
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       throw error.message;
  //     } else {
  //       throw new Error('An unknown error occurred');
  //     }
  //   }
  // }

  async delete(id: number) {
    try {
      const response = await axiosPrivate<IUserResponse>({
        url: API_URL.users(`${EnumBrandsPaths.DELETE}/${id}`),
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

export const usersService = new UsersService();
