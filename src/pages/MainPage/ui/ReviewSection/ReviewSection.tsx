import { memo } from 'react';

import { Review } from "../../../../entities/Review/model/types/review";

import { ReviewCard } from '@/entities/Review';
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from './ReviewSection.module.scss';

const review: Review = {
  id: '1',
  name: 'Alexander R',
  slogan: '5 Years With Us',
  image: 'https://live.verstaem.online/eatly/src/img/review/1.png',
  text: '“ Online invoice payment helps companies save time,' +
    ' are faster and save maximum effort for the clients and save' +
    ' maximum effort. Online invoice payment helps companies save time ”\n',
  rating: 4
}

export const ReviewSection = memo(() => (
    <section>
      <div className={cls.reviewContainer}>
        <h2 className={cls.reviewTitle}>
          <span>Customer </span>
          Say
        </h2>
        <ul className={cls.reviewInner}>
          <div className={cls.slides}>
            <div className={cls.track}>
              <input type="radio" name="r" id="r1" defaultChecked />
              <input type="radio" name="r" id="r2" />
              <input type="radio" name="r" id="r3" />
              <ReviewCard
                className={cls.s1}
                review={review}
              />
              <ReviewCard
                review={review}
              />
              <ReviewCard
                review={review}
            />
            </div>
          </div>
          <ul className={cls.navigation}>
            <button
              className={classNames(cls.bar, {}, [cls.active])}
              type="button"
            >
              <label htmlFor="r1" />
            </button>
            <button className={cls.bar}>
              <label htmlFor="r2" />
            </button>
            <button className={cls.bar}>
              <label htmlFor="r3" />
            </button>
          </ul>
        </ul>
      </div>
    </section>
  ));
