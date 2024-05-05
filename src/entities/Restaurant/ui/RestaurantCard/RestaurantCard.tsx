import { memo } from 'react';

import { Restaurant } from '../../model/types/restaurant';

import mark from "@/shared/assets/icons/book-mark.svg";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { AppImage } from "@/shared/ui/AppImage";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

import cls from './RestaurantCard.module.scss';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard = memo((props: RestaurantCardProps) => {
  const {
    restaurant,
  } = props;

 const mods: Mods = {
   [cls[restaurant.type]]: true
 }

  return (
    <article className={cls.RestaurantCard}>
      <div className={cls.RestaurantImage}>
        <AppImage
          className={cls.Image}
          src={restaurant.image}
          alt={restaurant.title}
        />
      </div>
      <div className={cls.RestaurantInfo}>
        <div className={classNames(cls.RestaurantType, mods)}>
          {restaurant.type}
        </div>
        <h3 className={cls.RestaurantName}>
          {restaurant.title}
        </h3>
        <div className={cls.RestaurantBottom}>
          <div className={cls.RestaurantTime}>
            {`${restaurant.time} min - `}
          </div>
          <div className={cls.RestaurantRating}>
            {restaurant.rating}
          </div>
          <Button
            theme={ButtonTheme.CLEAR}
            className={cls.RestaurantButton}
          >
            <Icon
              Svg={mark}
            />
          </Button>
        </div>
      </div>
    </article>
  );
});
