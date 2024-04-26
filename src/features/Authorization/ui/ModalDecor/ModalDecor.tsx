import { memo } from 'react';

import food from "@/shared/assets/icons/foodImg.png";
import foodMini from "@/shared/assets/icons/foodMini.png";
import graph from "@/shared/assets/icons/graph.png";
import { AppImage } from "@/shared/ui/AppImage";

import cls from './ModalDecor.module.scss';

export const ModalDecor = memo(() => (
    <article className={cls.ModalDecor}>
      <div className={cls.preview}>
        <div className={cls.previewImage}>
          <AppImage
            className={cls.image}
            src={food}
            alt="ChickenHell"
          />
          <div className={cls.previewMeal}>
            <div className={cls.mealInner}>
              <AppImage
                className={cls.innerImage}
                src={foodMini}
                alt="Food"
              />
              <div className={cls.innerInfo}>
                <h2>Chicken Hell</h2>
                <p>On The Way</p>
                <div className={cls.innerTime}>3:09 PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.graph}>
          <div className={cls.graphInner}>
            <AppImage
              src={graph}
              alt="Graph Image"
            />
          </div>
        </div>
      </div>
      <div className={cls.content}>
        <h3 className={cls.title}>
          Finds Foods With Love
        </h3>
        <p className={cls.text}>
          Eatly Is The Food Delivery Dashboard And Having More Than 2K+
          Dishes Including Asian, Chinese, Italians And Many More. Our
          Dashboard Helps You To Manage Orders And Money.
        </p>
      </div>
    </article>
  ));
