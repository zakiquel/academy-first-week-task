import { memo } from 'react';
import cls from './FooterEnd.module.scss';
import {Icon} from "shared/ui/Icon";
import inst from "shared/assets/icons/inst.svg";
import ins from "shared/assets/icons/in.svg";
import facebook from "shared/assets/icons/facebook.svg";
import twitter from "shared/assets/icons/twitter.svg";
import {Link} from "react-router-dom";
import {getRouteMain} from "shared/const/router";

const socialItems = [inst, ins, facebook, twitter];

export const FooterEnd = memo(() => {
  return (
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
  );
});
