import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './index.module.sass';

import { breakingBadAPI } from '@services/BreakingBadService';
import { SeriesEnum } from '@/types/services';

import Container from '@layout/Container';
import EpisodeCard from '@pages/Episodes/components/EpisodeCard';
import Loader from '@components/Loader';

const seasons = [1, 2, 3, 4, 5];
const cx = classNames.bind(styles);

const EpisodesPage = () => {
  const {
    isLoading,
    data: episodes,
    isError,
  } = breakingBadAPI.useGetEpisodesBySeriesQuery(SeriesEnum.breakingBad);

  const [selectedSeason, setSelectedSeason] = useState<number>(seasons[0]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h1>ERROR</h1>;
  }

  return (
    <div>
      <Container>
        <div className={styles.SeasonsWrapper}>
          <div className={styles.SeasonsList}>
            {seasons &&
              seasons.map((season, index, arr) => (
                <button
                  key={season}
                  className={cx(styles.SeasonsItem, {
                    SeasonsItemActive: selectedSeason === arr[index],
                  })}
                  onClick={() => setSelectedSeason(season)}
                >
                  Season {season}
                </button>
              ))}
          </div>
        </div>
        {episodes && selectedSeason && (
          <div className={styles.EpisodesList}>
            {episodes
              .filter((episode) => +episode.season === selectedSeason)
              .map((episode) => (
                <EpisodeCard key={episode.episode_id} episodeItem={episode} />
              ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default EpisodesPage;
