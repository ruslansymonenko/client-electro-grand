import { FC } from 'react';
import Button from '@/components/common/button/Button';
import { ICategoryResponse } from '@/types/server-response-types/category-response';
import { SERVER_URL } from '@/config/api.config';
import { PUBLIC_URL } from '@/config/url.config';
import Link from 'next/link';

interface ICategoryCardProps {
  categoryData: ICategoryResponse;
}

const CategoryCard: FC<ICategoryCardProps> = ({ categoryData }) => {
  return (
    <div className="bg-white rounded-2xl p-5 relative border shadow-md min-h-40 flex flex-col justify-between">
      <Link href={PUBLIC_URL.category(categoryData.slug)}>
        <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4 flex items-center justify-center">
          <img
            className="object-contain w-full h-full"
            src={`${SERVER_URL}/${categoryData.image}`}
            alt={categoryData.name}
          />
        </div>
      </Link>

      <h3 className="text-lg font-extrabold text-gray-800 text-center cursor-pointer hover:text-secondaryDark transition-all border-b pb-2">
        <Link href={PUBLIC_URL.category(categoryData.slug)}>{categoryData.name}</Link>
      </h3>
      <ul className="mb-4">
        {categoryData.subcategories.map((item) => (
          <li className="text-gray-600 text-sm mt-4 hover:text-primary transition-all cursor-pointer flex items-center">
            <span className="bg-gray-500 h-1 w-1 block rounded-full mr-2"></span>
            <Link href={PUBLIC_URL.subcategory(item.slug)}>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Button addClasses="bg-secondary mt-4">Всі підкатегорії</Button>
    </div>
  );
};

export default CategoryCard;
