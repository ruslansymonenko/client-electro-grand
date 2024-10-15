'use client';

import { FC, useEffect, useState } from 'react';
import { SERVER_URL } from '@/config/api.config';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

interface IPresentationInfoCardProps {
  title: string;
  image: string;
  slug: string;
  type: 'brand' | 'category';
}

const PresentationInfoCard: FC<IPresentationInfoCardProps> = ({ title, image, type, slug }) => {
  const [linkPath, setLinkPath] = useState<string>('');

  useEffect(() => {
    switch (type) {
      case 'brand':
        setLinkPath(PUBLIC_URL.brandProducts(slug));
        break;
      case 'category':
        setLinkPath(PUBLIC_URL.category(slug));
        break;
      default:
        setLinkPath(PUBLIC_URL.main);
    }
  }, [type]);

  return (
    <Link
      href={linkPath}
      className="bg-white p-6 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl overflow-hidden mx-auto cursor-pointer hover:shadow-xl"
    >
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 flex items-center justify-center">
          <img src={`${SERVER_URL}/${image}`} alt={title} />
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg text-gray-800 font-bold">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default PresentationInfoCard;
