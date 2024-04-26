import {memo, useState} from 'react';
import cls from '../SighInForm/SignInForm.module.scss';
import {Icon} from "shared/ui/Icon";
import apple from "shared/assets/icons/apple.svg";
import google from "shared/assets/icons/google.svg";
import {Input} from "shared/ui/Input";
import {Button, ButtonTheme} from "shared/ui/Button";
import {Link} from "react-router-dom";
import {getRouteMain} from "shared/const/router";

interface SignUpFormProps {
  onClose?: () => void;
}

export const SignUpForm = memo(({onClose}: SignUpFormProps) => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (value: string) => {
    setUsername(value);
  }
  const onChangeEmail = (value: string) => {
    setEmail(value);
  }

  const onChangePassword = (value: string) => {
    setPassword(value);
  }

  const signUpHandler = () => {
    onClose()
    setUsername('');
    setEmail('');
    setPassword('');
  }

  return (
    <form
      action="#"
      className={cls.signIn}
    >
      <h2 className={cls.title}>Sign Up to Eatly</h2>
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
          value={username}
          type="text"
          placeholder="Username"
          className={cls.input}
          onChange={onChangeUsername}
        />
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
          onClick={signUpHandler}
        >
          Sign in
        </Button>
        <p className={cls.formText}>
          Already Have An Account?
          <Link
            className={cls.link}
            to={getRouteMain()}
          >
            <span> Log In</span>
          </Link>
        </p>
      </div>
    </form>
  );
});
