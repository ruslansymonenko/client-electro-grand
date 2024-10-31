'use client';

import React, { FC } from 'react';
import Hero from '@/components/store/hero/Hero';
import PopularGoods from '@/components/store/popular-goods/PopularGoods';
import Features from '@/components/store/features/Features';
import TextInfo from '@/components/store/text-info/TextInfo';
import PresentationInfoCategories from '@/components/store/presentation-info-categories/PresentationInfoCategories';
import PresentationInfoBrands from '@/components/store/presentation-info-brands/PresentationInfoBrands';
import { CallbackButton } from '@/components/store/callback-button/CallbackButton';
import Modal from '@/components/common/modal/Modal';
import { CallbackModal } from '@/components/store/modal/CallbackModal';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Main: FC = () => {
  const isCallbackModalVisible = useSelector((state: RootState) => state.callbackModalSlice.isOpen);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight relative">
      <Hero />
      <PopularGoods />
      <PresentationInfoCategories />
      <PresentationInfoBrands />
      <Features />
      <TextInfo />

      <CallbackButton />

      <Modal isVisible={isCallbackModalVisible}>
        <CallbackModal />
      </Modal>
    </div>
  );
};

export default Main;
