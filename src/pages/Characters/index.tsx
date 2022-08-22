import React, { FC, useState } from 'react';

import styles from './index.module.sass';
import Container from '@layout/components/Container';
import { breakingBadAPI } from '@services/BreakingBadService';
import { ICharacter } from '@/types/ICharacter';
import CharacterCard from '@pages/Characters/components/CharacterCard';
import Modal from '@components/Modal';
import useToggle from '@hooks/useToggle';

const CharactersPage: FC = () => {
  const {
    isLoading,
    data: characters,
    isError,
  } = breakingBadAPI.useGetAllCharactersQuery({ limit: 10, offset: 10 });

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
    <div className={styles.CharacterPage}>
      <Container>
        <div>Characters Page header</div>
        <div className={styles.CharactersList}>
          {characters &&
            characters.map((character: ICharacter) => (
              <CharacterCard
                key={character.char_id}
                character={character}
                onShowMore={onShowMore}
              />
            ))}
        </div>
      </Container>
      <Modal isModalOpen={isCharacterModal} setModalOpen={setCharacterModal}>
        {selectedCharacter && <div>ID: {selectedCharacter.char_id}</div>}
      </Modal>
    </div>
  );
};

export default CharactersPage;
