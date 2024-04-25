import { memo } from 'react';
import cls from './Footer.module.scss';
import {FooterHeader} from "../FooterHeader/FooterHeader";
import {FooterEnd} from "widgets/Footer/ui/FooterEnd/FooterEnd";

export const Footer = memo(() => {
  return (
    <footer className={cls.Footer}>
      <div className={cls.container}>
        <FooterHeader />
        <FooterEnd />
      </div>
    </footer>
  );
});
