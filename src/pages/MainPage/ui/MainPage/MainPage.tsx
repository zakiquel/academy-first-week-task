import React, { memo } from 'react';
import cls from './MainPage.module.scss'
import {HeroSection} from "../HeroSection/HeroSection";
import {FeaturesSection} from "../FeaturesSection/FeaturesSection";
import {MobileSection} from "../MobileSection/MobileSection";
import {RestaurantsSection} from "../RestaurantsSection/RestaurantsSection";

export const MainPage = () => {
  return (
    <main className={cls.MainPage}>
      <HeroSection />
      <FeaturesSection />
      <MobileSection />
      <RestaurantsSection />
    </main>
  );
};

export default memo(MainPage);