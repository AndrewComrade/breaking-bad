import React, { useState } from 'react';

import styles from './index.module.sass';
import { breakingBadAPI } from '@services/BreakingBadService';
import { ICharacter } from '@/types/ICharacter';
import useToggle from '@hooks/useToggle';
import Container from '@layout/Container';
import CharacterCard from '@pages/Characters/components/CharacterCard';
import CharacterModal from '@pages/Characters/components/CharacterModal';
import { BASE_PAGINATION_PARAMS } from '@constants/index';

const CharactersPage = () => {
  const {
    isLoading,
    data: characters,
    isError,
  } = breakingBadAPI.useGetAllCharactersQuery(BASE_PAGINATION_PARAMS);

  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>();

  const { state: isCharacterModal, toggle: setCharacterModal } = useToggle();

  const onShowMore = (id: number) => {
    setSelectedCharacter(
      characters?.find((character) => character.char_id === id)
    );
    setCharacterModal();
  };

  if (isLoading) {
    return <h1>LOADING</h1>;
  }

  if (isError) {
    return <h1>ERROR</h1>;
  }

  return (
    <div className={styles.CharactersPage}>
      <Container>
        <div>Characters Page header</div>
        <div className={styles.CharactersList}>
          {characters &&
            characters.map((character) => (
              <CharacterCard
                key={character.char_id}
                character={character}
                onShowMore={onShowMore}
              />
            ))}
        </div>
      </Container>
      <CharacterModal
        isModalOpen={isCharacterModal}
        setModalOpen={setCharacterModal}
        character={selectedCharacter || ({} as ICharacter)}
      />
    </div>
  );
};

export default CharactersPage;
