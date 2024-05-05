import { memo, useEffect, useRef, useState } from 'react';
import Slider from "react-slick";

import { Review, ReviewCard } from "@/entities/Review";

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

const reviews: Review[] = [review, review, review, review];

export const ReviewSection = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null); // Create a reference to the Slider component
  const barRef = useRef<HTMLDivElement>(null);
  let barTranslate = 0;

  useEffect(() => {
    if (barRef.current) {
      const currentBarWidth = barRef.current.offsetWidth;
      // eslint-disable-next-line react-hooks/exhaustive-deps
      barTranslate = currentSlide * currentBarWidth;
      barRef.current.style.transform = `translateX(${barTranslate}px)`;
    }
  }, [currentSlide]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleSlideClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index); // Navigate to the clicked slide
    }
  };

  return (
    <section>
      <div className={cls.reviewContainer}>
        <h2 className={cls.reviewTitle}>
          <span>Customer </span>
          Say
        </h2>
        <Slider ref={sliderRef} {...settings} className="mb-5 md:mb-0">
          {reviews.map((review, index) => (
            <ReviewCard
              className={cls.card}
              key={index}
              review={review}
              onClick={() => handleSlideClick(index)}
            />
          ))}
        </Slider>
        <div className="slider bg-slate-200 h-2 relative rounded-full | md:w-[48%] md:mr-0 md:ml-auto -translate-y-full">
          <div
            ref={barRef}
            className="slider-bar bg-slate-400 w-1/3 h-2 absolute rounded-full | transition-transform duration-300 ease-in-out"
           />
        </div>
      </div>
    </section>
  )
});
