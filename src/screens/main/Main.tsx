import { FC } from 'react';
import Hero from '@/components/store/hero/Hero';
import PopularGoods from '@/components/store/popular-goods/PopularGoods';
import Features from '@/components/store/features/Features';
import PresentationInfo from '@/components/store/presentation-info/PresentationInfo';
import TextInfo from '@/components/store/text-info/TextInfo';

const Main: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Hero />
      <PopularGoods />
      <PresentationInfo title={'Категорії товарів'} />
      <PresentationInfo title={'Бренди'} />
      <Features />
      <TextInfo />
    </div>
  );
};

export default Main;
