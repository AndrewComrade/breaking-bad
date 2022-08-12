import React, { FC } from 'react';
import styles from './index.module.sass';

import { ICharacter } from '@/types/ICharacter';

interface CharacterCardInfoProps {
  character: ICharacter;
}

const CharacterCardInfo: FC<CharacterCardInfoProps> = ({ character }) => {
  const { birthday, status, occupation, portrayed } = character;

  return (
    <div className={styles.CharacterCardInfo}>
      {birthday && (
        <div className={styles.CharacterCardInfoItem}>
          <span className={styles.CharacterCardHeading}>Brthday:</span>
          <span>{birthday}</span>
        </div>
      )}
      {status && (
        <div className={styles.CharacterCardInfoItem}>
          <span className={styles.CharacterCardHeading}>Status:</span>
          <span>{status}</span>
        </div>
      )}
      {!!occupation.length && (
        <div className={styles.CharacterCardInfoItem}>
          <span className={styles.CharacterCardHeading}>Occupation:</span>
          <span>{occupation.join(', ')}</span>
        </div>
      )}
      {portrayed && (
        <div className={styles.CharacterCardInfoItem}>
          <span className={styles.CharacterCardHeading}>Actor:</span>
          <span>{portrayed}</span>
        </div>
      )}
    </div>
  );
};

export default CharacterCardInfo;
