import React from 'react';
import { IEpisode } from '@/types/IEpisode';

interface EpisodesListProps {
  episodes: IEpisode[];
  selectedSeason: number;
}

const EpisodesList = ({ episodes, selectedSeason }: EpisodesListProps) => {
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
