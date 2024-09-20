'use client';

import { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import styles from './Hero.module.scss';
import Button from '@/components/common/button/Button';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

interface ISlide {
  image: string;
  title: string;
  text: string;
}

const Hero: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides: ISlide[] = [
    {
      image: '/images/hero/image1.jpg',
      title: 'Elektro Grand - освітлення та електрика.',
      text: 'Високоякісна електрика. Обирайте' + ' перевірені бренди за доступними цінами.',
    },
    {
      image: '/images/hero/image2.jpg',
      title: 'Надійна електрика для вашого дому',
      text: 'Ми пропонуємо великий асортимент електротоварів',
    },
    {
      image: '/images/hero/image3.jpg',
      title: 'Надійна електрика для вашого дому',
      text: 'Інноваційні рішення для вашого проєкту та найкращі ціни на ринку.',
    },
  ];

  return (
    <section className={styles.hero}>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div className={styles.slide_container}>
            <div className="w-full flex justify-around">
              <div className="flex items-start flex-col justify-center">
                <h3 className="font-bold text-3xl w-2/3 mb-4">{slide.title}</h3>
                <p className="w-2/3 text-2xl mb-4">{slide.text}</p>
                <Link href={`${PUBLIC_URL.products()}`} className="w-1/3">
                  <Button addClasses={'h-14 flex items-center justify-center hover:bg-secondary'}>
                    <span>Переглянути товари</span>
                  </Button>
                </Link>
              </div>
              <div>
                <Image
                  className="rounded-md 	brightness-75"
                  src={slide.image}
                  alt={'Слайдер'}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
