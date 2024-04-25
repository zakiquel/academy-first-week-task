import { memo } from 'react';
import cls from './ReviewSection.module.scss';
import {Review} from "../../model/types/review";
import {ReviewCard} from "pages/MainPage/ui/ReviewSection/ui/ReviewCard/ReviewCard";

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

export const ReviewSection = memo(() => {
  return (
    <section>
      <div className={cls.reviewContainer}>
        <h2 className={cls.reviewTitle}>
          <span>Customer </span>
          Say
        </h2>
        <ul className={cls.reviewInner}>
          <div className={cls.slides}>
            <div className={cls.track}>
              <input type="radio" name="r" id="r1"></input>
              <input type="radio" name="r" id="r2"></input>
              <input type="radio" name="r" id="r3" defaultChecked></input>
              <ReviewCard
                className='s1'
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
            <label htmlFor="r1" className={cls.bar}>
            </label>
            <label htmlFor="r2" className={cls.bar}>
            </label>
            <label htmlFor="r3" className={cls.bar}>
            </label>
          </ul>
        </ul>
      </div>
    </section>
  );
});
