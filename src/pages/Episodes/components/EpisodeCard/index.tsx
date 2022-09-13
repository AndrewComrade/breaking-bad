import React from 'react';

import styles from './index.module.sass';

import { IEpisode } from '@/types/IEpisode';

interface EpisodeCardProps {
  episodeItem: IEpisode;
}

const EpisodeCard = ({ episodeItem }: EpisodeCardProps) => {
  const { title, episode, air_date } = episodeItem;

  return (
    <div className={styles.EpisodeCard}>
      <span>Date: {air_date}</span>
      <h2>
        #{episode} {title}
      </h2>
    </div>
  );
};

export default EpisodeCard;
