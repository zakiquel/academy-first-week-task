import { memo } from 'react';

import arrow from '@/shared/assets/icons/arrow-right.svg';
import mobile from '@/shared/assets/icons/phone.png';
import { AppImage } from "@/shared/ui/AppImage";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

import cls from './MobileSection.module.scss';

export const MobileSection = memo(() => (
    <section className={cls.MobileSection}>
      <article className={cls.mobileContainer}>
        <div className={cls.mobileImg}>
          <AppImage
            src={mobile}
            alt="Mobile Image"
          />
        </div>
        <div className={cls.mobileContent}>
          <h2 className={cls.mobileContentTitle}>
            Premium
            <span> Quality </span>
            For Your Health
          </h2>
          <ul className={cls.mobileContentList}>
            <li
              className={cls.mobileContentItem}
            >
              Premium quality food is made with ingredients
              that are packed with essential vitamins, minerals.
            </li>
            <li
              className={cls.mobileContentItem}
            >
              These foods promote overall wellness by support
              healthy digestion and boosting immunity
            </li>
          </ul>
          <Button
            className={cls.mobileButton}
            theme={ButtonTheme.PURPLE}
          >
            <span>Download</span>
            <Icon
              inverted
              className={cls.Arrow}
              Svg={arrow}
            />
          </Button>
        </div>
      </article>
    </section>
  ));
