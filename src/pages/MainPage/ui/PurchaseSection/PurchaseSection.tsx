import { memo } from 'react';

import { purchase1, purchase2, purchase3, PurchaseGraph, PurchaseList } from "@/entities/Purchase";

import cls from './PurchaseSection.module.scss';

export const PurchaseSection = memo(() => (
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
        <PurchaseGraph />
      </div>
    </section>
  ));
