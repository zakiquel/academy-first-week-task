import { memo } from 'react';
import cls from './DishesSection.module.scss';
import {Button, ButtonTheme} from "shared/ui/Button";
import {Icon} from "shared/ui/Icon";
import arrow from "shared/assets/icons/arrow-right.svg";
import {Dish, DishCard} from "entities/DishCard";
import {ProductType} from "entities/RestaurantCard";

const dish: Dish = {
  id: '1',
  title: 'Chicken Hell',
  type: ProductType.HEALTHY,
  price: 12,
  rating: 4.9,
  duration: 24,
  image: 'https://live.verstaem.online/eatly/src/img/food/1.png',
}

export const DishesSection = memo(() => {
  return (
    <section className={cls.DishesSection}>
      <div className={cls.dishesContainer}>
        <h2 className={cls.title}>
          Our Top
          <span> Dishes</span>
        </h2>
        <ul className={cls.inner}>
          <DishCard
            dish={dish}
          />
          <DishCard
            dish={dish}
          />
          <DishCard
            dish={dish}
          />
          <DishCard
            dish={dish}
          />
          <DishCard
            dish={dish}
          />
        </ul>
        <div className={cls.viewAll}>
          <Button
            theme={ButtonTheme.CLEAR}
            className={cls.viewAllBtn}
          >
            <span>View All</span>
            <Icon
              Svg={arrow}
            />
          </Button>
        </div>
      </div>
    </section>
  );
});
