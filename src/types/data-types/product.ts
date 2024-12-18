export interface IProduct {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  categoryId: number;
  subcategoryId: number;
  brandId: number;
}
