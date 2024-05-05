import { memo } from 'react';

import { Dish } from '../..';

import fav from '@/shared/assets/icons/fav.svg';
import plus from '@/shared/assets/icons/plus.svg';
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { AppImage } from "@/shared/ui/AppImage";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

import cls from './DishCard.module.scss';

interface DishCardProps {
  dish: Dish;
}

export const DishCard = memo((props: DishCardProps) => {
  const { dish } = props;

  const mods: Mods = {
    [cls[dish.type]]: true
  }

  return (
    <article className={cls.DishCard}>
      <div className={cls.DishImage}>
        <AppImage
          className={cls.Image}
          src={dish.image}
          alt={dish.title}
        />
      </div>
      <div className={classNames(cls.DishType, mods)}>
        {dish.type}
      </div>
      <h3 className={cls.DishName}>
        {dish.title}
      </h3>
      <div className={cls.DishInfo}>
        <div className={cls.duration}>
          {`${dish.duration} min - `}
        </div>
        <div className={cls.rating}>
          {dish.rating}
        </div>
      </div>
      <div className={cls.DishBottom}>
        <div className={cls.DishCost}>
          {`${dish.price}.`}
          <span>99</span>
        </div>
        <Button
          className={cls.DishPlus}
          theme={ButtonTheme.CLEAR}
        >
          <Icon
            Svg={plus}
          />
        </Button>
      </div>
      <Button
        className={cls.DishFav}
        theme={ButtonTheme.CLEAR}
      >
        <Icon
          Svg={fav}
        />
      </Button>
    </article>
  );
});
