import { useEffect, useState } from 'react';
import { ICharacter } from '@/types/ICharacter';
import { breakingBadAPI } from '@services/BreakingBadService';

const useInfiniteLoading = () => {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [combinedData, setCombinedData] = useState<ICharacter[]>([]);

  const { data, isLoading, isError, isFetching } =
    breakingBadAPI.useGetAllCharactersQuery(page);

  useEffect(() => {
    if (data && data.length > 0) {
      setHasMore(true);
      page === 1
        ? setCombinedData(data)
        : setCombinedData((prevData) => [...prevData, ...data]);
    } else {
      setHasMore(false);
    }
  }, [data]);

  return {
    combinedData,
    isLoading,
    isError,
    isFetching,
    page,
    setPage,
    hasMore,
  };
};

export default useInfiniteLoading;
