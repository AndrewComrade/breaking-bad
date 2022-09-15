import React, { useState, useRef, useEffect } from 'react';

import styles from './index.module.sass';
import { ICharacter } from '@/types/ICharacter';
import useToggle from '@hooks/useToggle';
import Container from '@layout/Container';
import CharacterCard from '@pages/Characters/components/CharacterCard';
import CharacterModal from '@pages/Characters/components/CharacterModal';
import useInView from '@hooks/useInView';
import useInfiniteLoading from '@hooks/useInfiniteLoading';
import ScrollTopBtn from '@components/ScrollTopBtn';
import Loader from '@components/Loader';

const CharactersPage = () => {
  const {
    combinedData: characters,
    isLoading,
    isFetching,
    isError,
    setPage,
    hasMore,
  } = useInfiniteLoading();

  const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>();
  const { state: isCharacterModal, toggle: setCharacterModal } = useToggle();

  const ref: any = useRef<HTMLElement>(null);
  const isIntersecting = useInView(ref, '0px');

  useEffect(() => {
    if (isIntersecting && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isIntersecting]);

  const onShowMore = (id: number) => {
    setSelectedCharacter(
      characters?.find((character) => character.char_id === id)
    );
    setCharacterModal();
  };

  if (isLoading) {
    return <Loader />;
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
        {isFetching && <Loader />}
        <div ref={ref}></div>
      </Container>
      <CharacterModal
        isModalOpen={isCharacterModal}
        setModalOpen={setCharacterModal}
        character={selectedCharacter || ({} as ICharacter)}
      />
      <ScrollTopBtn />
    </div>
  );
};

export default CharactersPage;
