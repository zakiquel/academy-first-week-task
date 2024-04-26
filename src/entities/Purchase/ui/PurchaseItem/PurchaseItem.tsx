import { memo } from 'react';

import { Stat } from '../../model/types/stat';

import { classNames } from "@/shared/lib/classNames/classNames";
import { Icon } from "@/shared/ui/Icon";

import cls from './PurchaseItem.module.scss';

export interface PurchaseItemProps {
  className?: string;
  stat: Stat;
}

export const PurchaseItem = memo(({ stat, className }: PurchaseItemProps) => (
    <li className={classNames(cls[className])}>
      <div className={cls.itemInner}>
        <Icon
          Svg={stat.logo}
        />
        <div className={cls.about}>
          <h4 className={cls.name}>
            {stat.title}
          </h4>
          <p className={cls.text}>
            {stat.text}
          </p>
        </div>
      </div>
      <div className={cls.cost}>
        {`$${stat.cost}`}
      </div>
    </li>
  ));
