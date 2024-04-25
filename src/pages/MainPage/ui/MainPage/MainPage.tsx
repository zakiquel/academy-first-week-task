import React, { memo } from 'react';
import cls from './MainPage.module.scss'
import {HeroSection} from "../HeroSection/HeroSection";
import {FeaturesSection} from "../FeaturesSection/FeaturesSection";
import {MobileSection} from "../MobileSection/MobileSection";
import {RestaurantsSection} from "../RestaurantsSection/RestaurantsSection";
import {DishesSection} from "../DishesSection/DishesSection";
import {PurchaseSection} from "../PurchaseSection/PurchaseSection";
import {ReviewSection} from "../ReviewSection/ui/ReviewSection/ReviewSection";
import {SaleBlock} from "../SaleBlock/SaleBlock";
import {Footer} from "widgets/Footer";

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
      <SaleBlock />
      <Footer />
    </main>
  );
};

export default memo(MainPage);