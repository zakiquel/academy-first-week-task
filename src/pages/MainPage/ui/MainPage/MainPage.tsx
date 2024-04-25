import React, { memo } from 'react';
import cls from './MainPage.module.scss'
import {HeroSection} from "../HeroSection/HeroSection";
import {FeaturesSection} from "../FeaturesSection/FeaturesSection";
import {MobileSection} from "../MobileSection/MobileSection";
import {RestaurantsSection} from "../RestaurantsSection/RestaurantsSection";
import {DishesSection} from "../DishesSection/DishesSection";
import {PurchaseSection} from "../PurchaseSection/PurchaseSection";
import {ReviewSection} from "../ReviewSection/ui/ReviewSection/ReviewSection";

export const MainPage = () => {
  return (
    <main className={cls.MainPage}>
      <HeroSection />
      <FeaturesSection />
      <MobileSection />
      <RestaurantsSection />
      <DishesSection />
      <PurchaseSection />
      <ReviewSection />
    </main>
  );
};

export default memo(MainPage);