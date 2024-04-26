import { memo } from 'react';

import { FormType } from "../../model/types/forms";
import { AuthForm } from '../AuthForm/AuthForm';
import { ModalDecor } from '../ModalDecor/ModalDecor';


import { Modal } from "@/shared/ui/Modal";

import cls from './AuthModal.module.scss';


interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  form: FormType;
}

export const AuthModal = memo(({ isOpen, onClose, form }: AuthModalProps) => (
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
  ));
