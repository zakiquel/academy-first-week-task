import { memo } from 'react';
import cls from './Footer.module.scss';
import inst from "shared/assets/icons/inst.svg";
import ins from "shared/assets/icons/in.svg";
import facebook from "shared/assets/icons/facebook.svg";
import twitter from "shared/assets/icons/twitter.svg";
import {Link} from "react-router-dom";
import {getRouteMain} from "shared/const/router";
import {Icon} from "shared/ui/Icon";
import eatly from "shared/assets/icons/app-logo.svg";

const navItems = ['Blog', 'Pricing', 'About Us', 'Contacts'];
const socialItems = [inst, ins, facebook, twitter];


export const Footer = memo(() => {
  return (
    <footer className={cls.Footer}>
      <div className={cls.container}>
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
        <div className={cls.end}>
          <p className={cls.copyright}>
            © 2023 EATLY All Rights Reserved.
          </p>
          <ul className={cls.social}>
            {socialItems.map((item) => (
              <li
                className={cls.socialLink}
                key={item.toString()}
              >
                <Link
                  to={getRouteMain()}
                >
                  <Icon
                    Svg={item}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
});
