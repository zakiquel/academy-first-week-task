import {memo, useState} from 'react';
import cls from './SignInForm.module.scss';
import {Icon} from "shared/ui/Icon";
import apple from "shared/assets/icons/apple.svg";
import google from "shared/assets/icons/google.svg";
import {Input} from "shared/ui/Input";
import {Button, ButtonTheme} from "shared/ui/Button";
import {Link} from "react-router-dom";
import {getRouteMain} from "shared/const/router";

interface SignInFormProps {
  onClose?: () => void;
}

export const SignInForm = memo(({onClose}: SignInFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (value: string) => {
    setEmail(value);
  }

  const onChangePassword = (value: string) => {
    setPassword(value);
  }

  const signInHandler = () => {
    setEmail('');
    setPassword('');
    onClose();
  }

  return (
    <form
      action="#"
      className={cls.signIn}
    >
      <h2 className={cls.title}>Sign In to Eatly</h2>
      <ul className={cls.social}>
        <li className={cls.socialItem}>
          <a href='#'>
            <Icon Svg={apple} />
          </a>
        </li>
        <li className={cls.socialItem}>
          <a href='#'>
            <Icon Svg={google} />
          </a>
        </li>
      </ul>
      <span className={cls.choice}>
        or
      </span>
      <div className={cls.formAuth}>
        <Input
          value={email}
          type="text"
          placeholder="Email"
          className={cls.input}
          onChange={onChangeEmail}
        />
        <Input
          value={password}
          type="text"
          placeholder="Password"
          className={cls.input}
          onChange={onChangePassword}
        />
        <Button
          className={cls.button}
          theme={ButtonTheme.PURPLE}
          onClick={signInHandler}
        >
          Sign in
        </Button>
        <p className={cls.formText}>
          Create A New Account?
          <Link
            className={cls.link}
            to={getRouteMain()}
          >
            <span> Sign up</span>
          </Link>
        </p>
      </div>
    </form>
  );
});
