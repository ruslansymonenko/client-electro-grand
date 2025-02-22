import { axiosPublic } from '@/api/api.interceptors';
import { API_URL } from '@/config/api.config';

const EnumBrandsPaths = {
  CONTACT: '/contact-form',
  CALLBACK: '/callback-form',
} as const;

export interface ICallbackFromData {
  phone: string;
}

export interface IContactFromData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

class FormsService {
  async contact(data: IContactFromData) {
    try {
      const response = await axiosPublic<boolean>({
        url: API_URL.mailer(EnumBrandsPaths.CONTACT),
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

  async callback(data: ICallbackFromData) {
    try {
      const response = await axiosPublic<boolean>({
        url: API_URL.mailer(EnumBrandsPaths.CALLBACK),
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
}

export const formsService = new FormsService();
