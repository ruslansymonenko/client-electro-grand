import { IUser } from '@/types/data-types/user';

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
}
