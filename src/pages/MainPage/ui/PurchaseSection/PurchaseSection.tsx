import { memo } from 'react';
import cls from './PurchaseSection.module.scss';
import {Select} from "shared/ui/Select";
import {purchase1, purchase2, purchase3,PurchaseList} from "entities/Purchase";

export const PurchaseSection = memo(() => {
  return (
    <section className={cls.PurchaseSection}>
      <div className={cls.purchaseContainer}>
        <div className={cls.purchaseHeader}>
          <h2 className={cls.title}>
            Control
            <span> Purchases </span>
            Via Dashboard
          </h2>
          <PurchaseList
            purchases={[purchase1, purchase2, purchase3]}
          />
        </div>
        <div className={cls.purchaseGraph}>
          <div className={cls.graphHeader}>
            <h3 className={cls.graphtitle}></h3>
            <Select />
          </div>
          <ul className={cls.graphInfo}>
            <li className={cls.graphItem}></li>
            <li className={cls.graphItem}></li>
          </ul>
        </div>
      </div>
    </section>
  );
});
