import React, { FC } from 'react';

import styles from './index.module.sass';
import Container from '@layout/components/Container';
import { breakingBadAPI } from '@services/BreakingBadService';
import { ICharacter } from '@/types/ICharacter';
import CharacterCard from '@pages/Characters/components/CharacterCard';

const CharactersPage: FC = () => {
  const {
    isLoading,
    data: characters,
    isError,
  } = breakingBadAPI.useGetAllCharactersQuery({ limit: 10, offset: 10 });

  console.log(characters);

  if (isLoading) {
    return <h1>LOADING</h1>;
  }

  if (isError) {
    return <h1>ERROR</h1>;
  }

  return (
    <div className={styles.CharacterPage}>
      <Container>
        <div>Characters Page header</div>
        <div className={styles.CharactersList}>
          {characters &&
            characters.map((character: ICharacter) => (
              <CharacterCard key={character.char_id} character={character} />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default CharactersPage;
