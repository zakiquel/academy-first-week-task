import React, { memo } from 'react';
import cls from './MainPage.module.scss'
import {MainPageHero} from "../MainPageHero/MainPageHero";

export const MainPage = () => {
  return (
    <main className={cls.MainPage}>
      <MainPageHero />
    </main>
  );
};

export default memo(MainPage);