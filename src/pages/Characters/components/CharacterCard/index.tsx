import React, { FC } from 'react';
import styles from './index.module.sass';

import { ICharacter } from '@/types/ICharacter';

interface CharacterCardProps {
  character: ICharacter;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  return (
    <article className={styles.CharacterCard}>
      <img
        className={styles.CharacterImage}
        src={character.img}
        alt={character.name}
      />
      <div className={styles.CharacterInfoWrapper}>
        <h3 className={styles.CharacterName}>{character.name}</h3>
      </div>
    </article>
  );
};

export default CharacterCard;
