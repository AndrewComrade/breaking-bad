import React, { FC } from 'react';
import styles from './index.module.sass';

import { ICharacter } from '@/types/ICharacter';
import CardInfo from '@pages/Characters/components/CharacterCard/CardInfo';

interface CharacterCardProps {
  character: ICharacter;
  onShowMore: (char_id: number) => void;
}

const CharacterCard: FC<CharacterCardProps> = ({ character, onShowMore }) => {
  const { name, img, nickname, char_id } = character;

  return (
    <article className={styles.Card}>
      <div className={styles.Sidebar}>
        <img className={styles.Image} src={img} alt={name} />
        <button className={styles.MoreBtn} onClick={() => onShowMore(char_id)}>
          More details
        </button>
      </div>
      <div className={styles.Main}>
        <h3 className={styles.Name}>{name}</h3>
        <span className={styles.Nickname}>{nickname}</span>
        <CardInfo character={character} />
      </div>
    </article>
  );
};

export default CharacterCard;
