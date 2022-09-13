import React, { FC, useState } from 'react';
import { breakingBadAPI } from '@services/BreakingBadService';
import { SeriesEnum } from '@/types/services';
import Container from '@layout/components/Container';
import EpisodesList from '@pages/Episodes/components/EpisodesList';

const seasons = Array.from(Array(5).keys());

const EpisodesPage: FC = () => {
  const {
    isLoading,
    data: episodes,
    isError,
  } = breakingBadAPI.useGetEpisodesBySeriesQuery(SeriesEnum.breakingBad);

  const [selectedSeason, setSelectedSeason] = useState<number | null>(null);

  if (isLoading) {
    return <h1>LOADING</h1>;
  }

  if (isError) {
    return <h1>ERROR</h1>;
  }

  return (
    <div>
      <Container>
        <div>
          {seasons &&
            seasons.map((season) => (
              <div key={season} onClick={() => setSelectedSeason(season)}>
                Season {++season}
              </div>
            ))}
        </div>
        {episodes && selectedSeason && (
          <EpisodesList episodes={episodes} selectedSeason={selectedSeason} />
        )}
      </Container>
    </div>
  );
};

export default EpisodesPage;
