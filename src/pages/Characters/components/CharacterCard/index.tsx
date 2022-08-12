import React, { FC } from 'react';
import styles from './index.module.sass';

import { ICharacter } from '@/types/ICharacter';

import CharacterCardInfo from '@pages/Characters/components/CharacterCardInfo';

interface CharacterCardProps {
  character: ICharacter;
}

const CharacterCard: FC<CharacterCardProps> = ({ character }) => {
  const { name, img, nickname } = character;

  return (
    <article className={styles.CharacterCard}>
      <div className={styles.CharacterCardSidebar}>
        <img className={styles.CharacterCardImage} src={img} alt={name} />
        <button className={styles.CharacterCardMoreBtn}>More details</button>
      </div>
      <div className={styles.CharacterCardMain}>
        <h3 className={styles.CharacterCardName}>{name}</h3>
        <span className={styles.CharacterCardNickname}>{nickname}</span>
        <CharacterCardInfo character={character} />
      </div>
    </article>
  );
};

export default CharacterCard;
