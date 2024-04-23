import { memo } from 'react';
import cls from './FeaturesSection.module.scss';

export const FeaturesSection = memo(() => {
  return (
    <section className={cls.FeaturesSection}>
      <div className={cls.container}>
        <ul className={cls.featuresList}>
          <li className={cls.featuresItem}>
            <div className={cls.featuresNum}>
              10K+
            </div>
            <p className={cls.featuresText}>
              Satisfied Costumers All Great Over The World
            </p>
          </li>
          <li className={cls.featuresItem}>
            <div className={cls.featuresNum}>
              4M
            </div>
            <p className={cls.featuresText}>
              Healthy Dishes Sold Including Milk Shakes Smooth
            </p>
          </li>
          <li className={cls.featuresItem}>
            <div className={cls.featuresNum}>
              99.99%
            </div>
            <p className={cls.featuresText}>
              Reliable Customer Support We Provide Great Experiences
            </p>
          </li>
        </ul>
        <div className={cls.decor}>

        </div>
      </div>
    </section>
  );
});
