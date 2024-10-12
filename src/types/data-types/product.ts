export interface IProduct {
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  categoryId: number;
  subcategoryId: number;
  brandId: number;
}
