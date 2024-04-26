import { memo, useCallback, useState } from 'react';
import { Link } from "react-router-dom";

import { AuthModal,FormType } from '@/features/Authorization';
import logo from "@/shared/assets/icons/app-logo.svg";
import burger from "@/shared/assets/icons/burger.svg";
import cross from "@/shared/assets/icons/cross.svg";
import { getRouteMain } from "@/shared/const/router";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

import cls from './Navbar.module.scss';


const menuItems: string[] = ['Menu', 'Blog', 'Pricing', 'Contacts'];

export const Navbar = memo(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formType, setFormType] = useState(null);

  const logInHandler = () => {
    setFormType(FormType.SIGNIN);
    setIsModalOpen(true);
  }

  const signUpHandler = () => {
    setFormType(FormType.SIGNUP);
    setIsModalOpen(true);
  }

  const onCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const [active, setActive] = useState(false);

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
          <nav className={active ? cls.active : cls.headerMenu}>
            <ul className={cls.headerList}>
              {menuItems.map((item) => (
                <li
                  className={cls.menuItem}
                  key={item}
                >
                  <Link
                    className={cls.menuLink}
                    to={getRouteMain()}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li className={cls.hidden}>
                <Button
                  className={cls.loginButton}
                  theme={ButtonTheme.PURPLE}
                  onClick={logInHandler}
                >
                  <span>Login</span>
                </Button>
              </li>
              <li className={cls.hidden}>
                <Button
                  className={cls.signUpButton}
                  theme={ButtonTheme.PURPLE}
                  onClick={signUpHandler}
                >
                  <span>Sign Up</span>
                </Button>
              </li>
            </ul>
          </nav>
          <div className={cls.headerForm}>
            <Button
              className={cls.loginButton}
              theme={ButtonTheme.CLEAR}
              onClick={logInHandler}
            >
              <span>Login</span>
            </Button>
            <Button
              className={cls.signUpButton}
              theme={ButtonTheme.PURPLE}
              onClick={signUpHandler}
            >
              <span>Sign Up</span>
            </Button>
          </div>
          <Button
            theme={ButtonTheme.CLEAR}
            className={cls.burger}
            onClick={() => setActive(!active)}
          >
            <Icon
              Svg={active ? cross : burger}
            />
          </Button>
        </div>
      </div>
      <AuthModal form={formType} isOpen={isModalOpen} onClose={onCloseModal}/>
    </header>
  );
});
