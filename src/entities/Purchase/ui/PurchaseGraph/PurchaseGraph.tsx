import {memo, useMemo} from 'react';
import {PurchaseItem, Stat} from "entities/Purchase";
import {Select, SelectOption} from "shared/ui/Select";
import logo1 from "shared/assets/icons/expenses.svg";
import logo2 from "shared/assets/icons/vocherIcon.svg";
import cls from './PurchaseGraph.module.scss';


const purchase1: Stat = {
  id: '1',
  title: 'Expense',
  text: 'Increased By 10%',
  cost: 409.00,
  logo: logo1
}

const purchase2: Stat = {
  id: '2',
  title: 'Vocher Usage',
  text: 'Increased By 10%',
  cost: 45.78,
  logo: logo2
}



export const PurchaseGraph = memo(() => {

  const timeOptions = useMemo<SelectOption<string>[]>(
    () => [
      {
        value: 'year',
        content: 'This Year',
      },
      {
        value: 'week',
        content: 'This week',
      },
      {
        value: 'month',
        content: 'This month',
      },
    ], []
  );
  return (
    <article className={cls.PurchaseGraph}>
      <div className={cls.header}>
        <h3 className={cls.title}>Purchases</h3>
        <Select
          value='week'
          options={timeOptions}
          className={cls.select}
        />
      </div>
      <ul className={cls.info}>
        <PurchaseItem
          className='purple'
          stat={purchase1}
        />
        <PurchaseItem
          className='orange'
          stat={purchase2}
        />
      </ul>
    </article>
  );
});
