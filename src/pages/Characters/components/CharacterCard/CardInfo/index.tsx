import React from 'react';

import styles from './index.module.sass';

import { ICharacter } from '@/types/ICharacter';

interface CardInfoProps {
  character: ICharacter;
}

const CardInfo = ({ character }: CardInfoProps) => {
  const { birthday, status, occupation, portrayed } = character;

  return (
    <div className={styles.CardInfo}>
      {birthday && (
        <div className={styles.InfoItem}>
          <span className={styles.Heading}>Brthday:</span>
          <span>{birthday}</span>
        </div>
      )}
      {status && (
        <div className={styles.InfoItem}>
          <span className={styles.Heading}>Status:</span>
          <span>{status}</span>
        </div>
      )}
      {!!occupation.length && (
        <div className={styles.InfoItem}>
          <span className={styles.Heading}>Occupation:</span>
          <span>{occupation.join(', ')}</span>
        </div>
      )}
      {portrayed && (
        <div className={styles.InfoItem}>
          <span className={styles.Heading}>Actor:</span>
          <span>{portrayed}</span>
        </div>
      )}
    </div>
  );
};

export default CardInfo;
