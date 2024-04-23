import React, { memo } from 'react';
import cls from './MainPage.module.scss'
import {HeroSection} from "../HeroSection/HeroSection";
import {FeaturesSection} from "../FeaturesSection/FeaturesSection";

export const MainPage = () => {
  return (
    <main className={cls.MainPage}>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
};

export default memo(MainPage);