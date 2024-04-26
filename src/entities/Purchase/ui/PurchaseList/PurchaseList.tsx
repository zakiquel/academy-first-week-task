import { memo } from 'react';

import { Purchase, PurchaseCard } from '../..';

import cls from './PurchaseList.module.scss';

interface PurchaseListProps {
  purchases: Purchase[];
}

export const PurchaseList = memo(({ purchases }: PurchaseListProps) => (
    <div className={cls.PurchaseList}>
      {purchases.map((purchase) => (
        <PurchaseCard
          purchase={purchase}
          key={purchase.id}
        />
      ))}
    </div>
  ));
