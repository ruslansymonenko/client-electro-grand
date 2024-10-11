import { FC } from 'react';
import { Lamp } from 'lucide-react';
import Button from '@/components/common/button/Button';

const CategoryCard: FC = () => {
  return (
    <div className="bg-white rounded-2xl p-5 relative border shadow-md">
      <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4 flex items-center justify-center">
        <Lamp width={100} height={100} />
      </div>

      <div>
        <h3 className="text-lg font-extrabold text-gray-800 text-center cursor-pointer hover:text-secondaryDark transition-all border-b pb-2">
          Category
        </h3>
        <ul className={'mb-2'}>
          <li className="text-gray-600 text-sm mt-2 hover:text-primary transition-all cursor-pointer flex items-center">
            <span className="bg-bgDark h-2 w-2 block rounded-full mr-2"></span>
            <span>Subcategory</span>
          </li>
          <li className="text-gray-600 text-sm mt-2 hover:text-primary transition-all cursor-pointer flex items-center">
            <span className="bg-bgDark h-2 w-2 block rounded-full mr-2"></span>
            <span>Subcategory</span>
          </li>
          <li className="text-gray-600 text-sm mt-2 hover:text-primary transition-all cursor-pointer flex items-center">
            <span className="bg-bgDark h-2 w-2 block rounded-full mr-2"></span>
            <span>Subcategory</span>
          </li>
        </ul>
        <Button>Всі підкатегорії</Button>
      </div>
    </div>
  );
};

export default CategoryCard;
