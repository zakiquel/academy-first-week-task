import { memo } from 'react';
import { Link } from "react-router-dom";

import eatly from "@/shared/assets/icons/app-logo.svg";
import facebook from "@/shared/assets/icons/facebook.svg";
import ins from "@/shared/assets/icons/in.svg";
import inst from "@/shared/assets/icons/inst.svg";
import twitter from "@/shared/assets/icons/twitter.svg";
import { getRouteMain } from "@/shared/const/router";
import { Icon } from "@/shared/ui/Icon";

import cls from './Footer.module.scss';

const navItems = ['Blog', 'Pricing', 'About Us', 'Contacts'];
const socialItems = [inst, ins, facebook, twitter];


export const Footer = memo(() => (
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
  ));
