import { memo } from 'react';
import cls from './ReviewCard.module.scss';
import {AppImage} from "shared/ui/AppImage";
import {Icon} from "shared/ui/Icon";
import star from "shared/assets/icons/star.svg";
import {Review} from "../../model/types/review";
import {classNames} from "shared/lib/classNames/classNames";

interface ReviewCardProps {
  className?: string;
  review: Review;
}

export const ReviewCard = memo(({review, className}: ReviewCardProps) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < review.rating; i++) {
      stars.push(
        <Icon
          className={cls.icon}
          key={i}
          Svg={star}
        />
      );
    }
    return stars;
  };

  return (
    <article className={classNames(cls.reviewItem, {}, [className])}>
      <div className={cls.reviewHeader}>
        <AppImage
          className={cls.image}
          src={review.image}
        />
        <div className={cls.reviewInfo}>
          <div className={cls.name}>
            {review.name}
          </div>
          <div className={cls.slogan}>
            {review.slogan}
          </div>
        </div>
      </div>
      <p className={cls.reviewText}>
        {review.text}
      </p>
      <div className={cls.reviewRating}>
        {renderStars()}
      </div>
    </article>
  );
});
