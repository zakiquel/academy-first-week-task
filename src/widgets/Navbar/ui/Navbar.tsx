import {memo} from 'react';
import {Link} from "react-router-dom";
import {getRouteMain} from "shared/const/router";
import {Icon} from "shared/ui/Icon";
import cls from './Navbar.module.scss';
import logo from "shared/assets/icons/app-logo.svg";
import {Button, ButtonTheme} from "shared/ui/Button";

interface NavbarProps {

}

export const Navbar = memo((props: NavbarProps) => {
  const {} = props;
  return (
    <header className={cls.Navbar}>
      <div className={cls.container}>
        <div className={cls.headerBody}>
          <Link
            className={cls.headerLogo}
            to={getRouteMain()}
          >
            <Icon
              Svg={logo}
            />
            <span>eatly</span>
          </Link>
          <nav className={cls.headerMenu}>
            <ul className={cls.headerList}>
              <li className={cls.menuItem}><Link className={cls.menuLink} to={getRouteMain()}>Menu</Link></li>
              <li className={cls.menuItem}><Link className={cls.menuLink} to={getRouteMain()}>Blog</Link></li>
              <li className={cls.menuItem}><Link className={cls.menuLink} to={getRouteMain()}>Pricing</Link></li>
              <li className={cls.menuItem}><Link className={cls.menuLink} to={getRouteMain()}>Contacts</Link></li>
            </ul>
          </nav>
          <div className={cls.headerForm}>
            <Button
              className={cls.loginButton}
              theme={ButtonTheme.CLEAR}
            >
              <span>Login</span>
            </Button>
            <Button
              className={cls.signUpButton}
              theme={ButtonTheme.PURPLE}
            >
              <span>Sign Up</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
});
