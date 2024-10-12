import { FC } from 'react';
import Hero from '@/components/store/hero/Hero';
import PopularGoods from '@/components/store/popular-goods/PopularGoods';
import Features from '@/components/store/features/Features';
import TextInfo from '@/components/store/text-info/TextInfo';
import PresentationInfoCategories from '@/components/store/presentation-info-categories/PresentationInfoCategories';
import PresentationInfoBrands from '@/components/store/presentation-info-brands/PresentationInfoBrands';

const Main: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Hero />
      <PopularGoods />
      <PresentationInfoCategories />
      <PresentationInfoBrands />
      <Features />
      <TextInfo />
    </div>
  );
};

export default Main;
