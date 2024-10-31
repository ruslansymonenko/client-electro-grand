import { AxiosError } from 'axios';

export function getErrorMessage(error: Error | AxiosError | string): string {
  if (typeof error === 'string') {
    return error;
  }

  if (error instanceof AxiosError) {
    return error.response?.data?.message || error.message;
  } else {
    return error.message;
  }
}
