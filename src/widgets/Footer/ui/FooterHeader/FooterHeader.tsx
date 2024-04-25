import { memo } from 'react';
import cls from './FooterHeader.module.scss';
import {Link} from "react-router-dom";
import {getRouteMain} from "shared/const/router";
import {Icon} from "shared/ui/Icon";
import eatly from "shared/assets/icons/app-logo.svg";

const navItems = ['Blog', 'Pricing', 'About Us', 'Contacts'];

export const FooterHeader = memo(() => {
  return (
    <div className={cls.header}>
      <Link
        className={cls.logo}
        to={getRouteMain()}
      >
        <Icon
          Svg={eatly}
        />
        <span> eatly</span>
      </Link>
      <nav className={cls.menu}>
        {navItems.map((item) => (
          <li
            className={cls.item}
            key={item}
          >
            <Link
              className={cls.logo}
              to={getRouteMain()}
            >
              {item}
            </Link>
          </li>
        ))}
      </nav>
    </div>
  );
});
