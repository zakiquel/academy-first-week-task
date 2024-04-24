import {memo} from 'react';
import cls from './HeroSection.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button";
import trustPilot from 'shared/assets/icons/trustpilot.svg';
import stars from 'shared/assets/icons/stars.svg';
import food from 'shared/assets/icons/foodImg.png';
import foodMini from 'shared/assets/icons/foodMini.png';
import graph from 'shared/assets/icons/graph.png';
import {Icon} from "shared/ui/Icon";
import {AppImage} from "shared/ui/AppImage";

export const HeroSection = memo(() => {
  return (
    <section className={cls.HeroSection}>
      <div className={cls.container}>
        <article className={cls.heroHeader}>
          <div className={cls.subtitle}>
            <span>
              Over 1000 Users
            </span>
          </div>
          <h1 className={cls.title}>
            Enjoy Foods All Over The
            <span> World</span>
          </h1>
          <p className={cls.text}>
            EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early.
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
                src={graph}
                alt="Graph Image"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
});
