import { memo } from 'react';

import food from '@/shared/assets/icons/foodImg.png';
import foodMini from '@/shared/assets/icons/foodMini.png';
import graph from '@/shared/assets/icons/graph.png';
import stars from '@/shared/assets/icons/stars.svg';
import trustPilot from '@/shared/assets/icons/trustpilot.svg';
import { AppImage } from "@/shared/ui/AppImage";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

import cls from './HeroSection.module.scss';

export const HeroSection = memo(() => (
    <section className={cls.HeroSection}>
      <div className={cls.container}>
        <article className={cls.heroHeader}>
          <p className={cls.subtitle}>
            Over 1000 Users
          </p>
          <h1 className={cls.title}>
            Enjoy Foods All Over The
            <span> World</span>
          </h1>
          <p className={cls.text}>
            EatLy help you set saving goals, earn cash back offers,
            Go to disclaimer for more details and get paychecks up to two days early.
            <span>Get a $20 bonus.</span>
          </p>
          <div className={cls.btns}>
            <Button
              className={cls.btn}
              theme={ButtonTheme.PURPLE}
            >
              Get Started
            </Button>
            <Button
              className={cls.btnGo}
              theme={ButtonTheme.OUTLINE}
            >
              Go Pro
            </Button>
          </div>
          <div className={cls.rating}>
            <Icon
              Svg={trustPilot}
            />
            <div className={cls.stars}>
              <Icon Svg={stars} />
              <span className={cls.number}>4900+</span>
            </div>
          </div>
        </article>

        <article className={cls.heroPreview}>
          <div className={cls.heroImage}>
            <AppImage
              className={cls.Image}
              src={food}
              alt="ChickenHell"
            />
            <div className={cls.heroMeal}>
              <div className={cls.heroMealInner}>
                <AppImage
                  className={cls.InnerImage}
                  src={foodMini}
                  alt="Food"
                />
                <div className={cls.heroMealInnerInfo}>
                  <h2>Chicken Hell</h2>
                  <p>On The Way</p>
                  <div className={cls.heroMealTime}>3:09 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className={cls.heroGraph}>
            <div className={cls.heroGraphInner}>
              <AppImage
                className={cls.graphImg}
                src={graph}
                alt="Graph Image"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  ));
