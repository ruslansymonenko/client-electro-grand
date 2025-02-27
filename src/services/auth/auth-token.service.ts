import Cookies from 'js-cookie';

export enum EnumTokens {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
  ADMIN_TOKEN = 'adminToken',
}

export const getAccessToken = (): string | null => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);

  if (accessToken) return accessToken;

  return null;
};

export const saveAccessToken = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: process.env.NEXT_PUBLIC_APP_DOMAIN,
    sameSite: 'lax',
    expires: 1,
  });
};

export const removeTokenFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN, { domain: process.env.NEXT_PUBLIC_APP_DOMAIN });
  Cookies.remove(EnumTokens.ACCESS_TOKEN, { domain: process.env.NEXT_PUBLIC_APP_DOMAIN });
};
