import React, { FC } from 'react';
import { IEpisode } from '@/types/IEpisode';

interface EpisodesListProps {
  episodes: IEpisode[];
  selectedSeason: number;
}

const EpisodesList: FC<EpisodesListProps> = ({ episodes, selectedSeason }) => {
  return (
    <div>
      {episodes
        .filter((episode) => +episode.season === selectedSeason)
        .map((episode) => (
          <div key={episode.episode_id}>{episode.episode}</div>
        ))}
    </div>
  );
};

export default EpisodesList;
