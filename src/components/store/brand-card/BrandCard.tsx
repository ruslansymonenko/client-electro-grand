import { FC } from 'react';
import { SERVER_URL } from '@/config/api.config';
import Button from '@/components/common/button/Button';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

interface IBrandCardProps {
  name: string;
  image: string;
  slug: string;
}

const BrandCard: FC<IBrandCardProps> = ({ name, image, slug }) => {
  return (
    <div className="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4 flex flex-col justify-between">
      <div className="h-[245px]">
        <img className="object-contain w-full h-full" src={`${SERVER_URL}/${image}`} alt={name} />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold mb-4">{name}</h3>
      </div>
      <Button addClasses={'hover:bg-secondary mb-2'}>
        <Link href={PUBLIC_URL.brandProducts(slug)}>Переглянути товари</Link>
      </Button>
    </div>
  );
};

export default BrandCard;
