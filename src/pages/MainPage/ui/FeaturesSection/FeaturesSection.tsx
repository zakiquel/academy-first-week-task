import { memo } from 'react';

import cls from './FeaturesSection.module.scss';

const items: {num: string, text: string}[] = [
  {
    num: '10K+',
    text: 'Satisfied Costumers All Great Over The World'
  },
  {
    num: '4M',
    text: 'Healthy Dishes Sold Including Milk Shakes Smooth'
  },
  {
    num: '99.99%',
    text: 'Reliable Customer Support We Provide Great Experiences'
  },
]

export const FeaturesSection = memo(() => (
    <div className={cls.FeaturesSection}>
      <div className={cls.container}>
        <ul className={cls.featuresList}>
          {items.map((item) => (
            <li
              className={cls.featuresItem}
              key={item.num}
            >
              <div className={cls.featuresNum}>
                {item.num}
              </div>
              <p className={cls.featuresText}>
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ));
