import { memo } from 'react';
import cls from './PurchaseCard.module.scss';
import {AppImage} from "shared/ui/AppImage";
import {Purchase} from "entities/Purchase";
import {classNames, Mods} from "shared/lib/classNames/classNames";

interface PurchaseProps {
  className?: string;
  purchase: Purchase;
}

export const PurchaseCard = memo(({purchase}: PurchaseProps) => {

  const mods: Mods = {
    [cls[purchase.status]]: true
  }

  return (
    <article className={cls.Purchase}>
      <div className={cls.purchaseImg}>
        <AppImage
          className={cls.image}
          src={purchase.img}
          alt={purchase.name}
        />
      </div>
      <div className={cls.purchaseInfo}>
        <h2 className={cls.purchaseName}>
          {purchase.name}
        </h2>
        <p className={classNames(cls.purchaseStatus, mods)}>
          {purchase.status}
        </p>
        <div className={cls.purchaseTime}>
          {`${purchase.time} PM`}
        </div>
      </div>
    </article>
  );
});
