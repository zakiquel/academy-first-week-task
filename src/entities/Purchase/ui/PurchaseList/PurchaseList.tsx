import { memo } from 'react';
import cls from './PurchaseList.module.scss';
import {Purchase, PurchaseCard} from "entities/Purchase";

interface PurchaseListProps {
  className?: string;
  purchases: Purchase[];
}

export const PurchaseList = memo(({purchases}: PurchaseListProps) => {
  return (
    <div className={cls.PurchaseList}>
      {purchases.map((purchase) => (
        <PurchaseCard
          purchase={purchase}
          key={purchase.id}
        />
      ))}
    </div>
  );
});
