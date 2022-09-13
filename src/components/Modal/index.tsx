import React, { FC, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.sass';

interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
  setModalOpen: (isModalOpen: boolean) => void;
}

const cx = classNames.bind(styles);

const Modal: FC<ModalProps> = ({ children, isModalOpen, setModalOpen }) => {
  const onModalClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setModalOpen(false);
  };

  const onModalBodyClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className={cx(styles.Modal, {
        ModalOpen: isModalOpen,
      })}
      onClick={onModalClose}
    >
      <div className={styles.ModalBody} onClick={onModalBodyClick}>
        {children}
        <button className={styles.ModalCloseBtn} onClick={onModalClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
