import { PUBLIC_URL } from '@/config/url.config';

interface INavData {
  pagePath: string;
  name: string;
}

export const appPages: INavData[] = [
  {
    pagePath: `${PUBLIC_URL.main()}`,
    name: 'Головна',
  },
  {
    pagePath: `${PUBLIC_URL.products()}`,
    name: 'Товари',
  },
  {
    pagePath: `${PUBLIC_URL.categories()}`,
    name: 'Категорії',
  },
  {
    pagePath: `${PUBLIC_URL.brands()}`,
    name: 'Бренди',
  },
  {
    pagePath: `${PUBLIC_URL.terms()}`,
    name: 'Умови',
  },
  {
    pagePath: `${PUBLIC_URL.about()}`,
    name: 'Про Нас',
  },
  {
    pagePath: `${PUBLIC_URL.contact()}`,
    name: 'Контакт',
  },
];
