import { memo } from 'react';
import { Link } from "react-router-dom";

import { FormType } from "../../model/types/forms";
import { SignInForm } from '../SignInForm/SignInForm';
import { SignUpForm } from "../SignUpForm/SignUpForm";

import logo from "@/shared/assets/icons/app-logo.svg";
import { getRouteMain } from "@/shared/const/router";
import { Icon } from "@/shared/ui/Icon";

import cls from './AuthForm.module.scss';

interface AuthFormProps {
  onClose: () => void;
  form: FormType;
}

export const AuthForm = memo(({ onClose, form }: AuthFormProps) => (
    <div className={cls.AuthForm}>
      <div className={cls.container}>
        <Link
          className={cls.modalLogo}
          to={getRouteMain()}
        >
          <Icon Svg={logo} />
          <span>eatly</span>
        </Link>
        {form === FormType.SIGNIN
          ? <SignInForm
              onClose={onClose}
            />
          : <SignUpForm
              onClose={onClose}
            />
        }
        <div className={cls.bottom}>
          <a
            href=""
            className={cls.bottomLink}
          >
            Privacy Police
          </a>
          <a
            href=""
            className={cls.bottomLink}
          >
            Copyright 2022
          </a>
        </div>
      </div>
    </div>
  ));
