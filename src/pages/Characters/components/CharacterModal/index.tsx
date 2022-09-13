import React from 'react';
import Modal from '@components/Modal';
import { ICharacter } from '@/types/ICharacter';

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
