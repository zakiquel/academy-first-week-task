import { memo } from 'react';
import cls from './AuthModal.module.scss';
import {AuthForm} from "features/Authorization/ui/AuthForm/AuthForm";
import {ModalDecor} from "features/Authorization/ui/ModalDecor/ModalDecor";
import {Modal} from "shared/ui/Modal";
import {FormType} from "../../model/types/forms";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  form: FormType;
}

export const AuthModal = memo(({isOpen, onClose, form}: AuthModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={cls.AuthModal}
    >
      <AuthForm
        form={form}
        onClose={onClose}
      />
      <ModalDecor />
    </Modal>
  );
});
