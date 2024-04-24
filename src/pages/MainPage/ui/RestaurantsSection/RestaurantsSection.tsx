import {memo} from 'react';
import cls from './RestaurantsSection.module.scss';
import {Restaurant, RestaurantCard, RestaurantType} from "entities/RestaurantCard";
import {Button, ButtonTheme} from "shared/ui/Button";
import {Icon} from "shared/ui/Icon";
import arrow from 'shared/assets/icons/arrow-right.svg'

const rest1: Restaurant = {
  id: '1',
  title: 'The Chicken King',
  image: 'https://live.verstaem.online/eatly/src/img/restaurants/1.jpg',
  type: RestaurantType.TRENDING,
  time: 24,
  rating: 4.8,
}

const rest2: Restaurant = {
  id: '2',
  title: 'The Burger King',
  image: 'https://live.verstaem.online/eatly/src/img/restaurants/2.jpg',
  type: RestaurantType.HEALTHY,
  time: 24,
  rating: 4.9,
}

export const RestaurantsSection = memo(() => {
  return (
    <section className={cls.RestaurantsSection}>
      <div className={cls.restaurantsContainer}>
        <h1 className={cls.title}>
          Our Top
          <span> Restaurants</span>
        </h1>
        <ul className={cls.inner}>
          <RestaurantCard
            restaurant={rest1}
          />
          <RestaurantCard
            restaurant={rest2}
          />
          <RestaurantCard
            restaurant={rest1}
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
