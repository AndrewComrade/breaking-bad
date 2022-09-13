import React, { FC } from 'react';
import Modal from '@components/Modal';
import { ICharacter } from '@/types/ICharacter';

interface CharacterModalProps {
  isModalOpen: boolean;
  setModalOpen: () => void;
  character: ICharacter;
}

const CharacterModal: FC<CharacterModalProps> = ({
  isModalOpen,
  setModalOpen,
  character,
}) => {
  return (
    <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
      <div>{character.char_id}</div>
    </Modal>
  );
};

export default CharacterModal;
