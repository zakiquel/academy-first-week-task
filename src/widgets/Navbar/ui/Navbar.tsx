import {memo, useCallback, useState} from 'react';
import {Link} from "react-router-dom";
import {getRouteMain} from "shared/const/router";
import {Icon} from "shared/ui/Icon";
import cls from './Navbar.module.scss';
import logo from "shared/assets/icons/app-logo.svg";
import {Button, ButtonTheme} from "shared/ui/Button";
import {AuthModal} from "features/Authorization/ui/AuthModal/AuthModal";
import {FormType} from "features/Authorization/model/types/forms";

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
        </div>
      </div>
      <AuthModal form={formType} isOpen={isModalOpen} onClose={onCloseModal}/>
    </header>
  );
});
