import React, { memo } from 'react';

import { DishesSection } from "../DishesSection/DishesSection";
import { FeaturesSection } from "../FeaturesSection/FeaturesSection";
import { HeroSection } from "../HeroSection/HeroSection";
import { MobileSection } from "../MobileSection/MobileSection";
import { PurchaseSection } from "../PurchaseSection/PurchaseSection";
import { RestaurantsSection } from "../RestaurantsSection/RestaurantsSection";
import { ReviewSection } from "../ReviewSection/ReviewSection";
import { SaleBlock } from "../SaleBlock/SaleBlock";

import { Footer } from "@/widgets/Footer";

import cls from './MainPage.module.scss'

export const MainPage = () => (
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

export default memo(MainPage);