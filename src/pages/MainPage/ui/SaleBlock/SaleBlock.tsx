import { memo } from 'react';

import { Button, ButtonTheme } from "@/shared/ui/Button";

import cls from './SaleBlock.module.scss';

export const SaleBlock = memo(() => (
    <div className={cls.SaleBlock}>
      <div className={cls.container}>
        <div className={cls.inner}>
          <h2 className={cls.title}>
            Get 50%
          </h2>
          <form action="#" className={cls.form}>
            <input
              type="email" className={cls.saleInput}
              placeholder="Enter Your Email Adress"
            />
            <div className={cls.sale}>
              <Button
                theme={ButtonTheme.PURPLE}
                className={cls.saleBtn}
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ));
