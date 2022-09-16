import React from 'react';

import { ICharacter } from '@/types/ICharacter';

import Modal from '@components/Modal';

interface CharacterModalProps {
  isModalOpen: boolean;
  setModalOpen: () => void;
  character: ICharacter;
}

const CharacterModal = ({
  isModalOpen,
  setModalOpen,
  character,
}: CharacterModalProps) => {
  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
      <div>{character.char_id}</div>
    </Modal>
  );
};

export default CharacterModal;
