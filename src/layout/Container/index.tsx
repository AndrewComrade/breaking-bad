import React from 'react';
import styles from './index.module.sass';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className={styles.Container}>{children}</div>;
};

export default Container;
