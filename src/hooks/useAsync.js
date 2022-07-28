import { useCallback, useEffect, useState } from 'react';
import { REQUEST_STATUSES } from '../constants';

const useAsync = (asyncFunction, imediate = true) => {
  const [status, setStatus] = useState(REQUEST_STATUSES.IDLE);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setStatus(REQUEST_STATUSES.LOADING);
    setData(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setData(response.data);
        setStatus(REQUEST_STATUSES.SUCCESS);
      })
      .catch((error) => {
        setError(error);
        setStatus(REQUEST_STATUSES.ERROR);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (imediate) {
      execute();
    }
  }, [imediate.execute]);

  return { data, status, error, execute };
};

export default useAsync;
