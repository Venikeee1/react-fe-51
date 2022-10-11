import { useEffect } from 'react';
import { useState } from 'react';

export const useFetch = (key, apiRequest) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!key) return;

    setIsLoading(true);

    apiRequest()
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [key]);

  return {
    data,
    isLoading,
    error,
  };
};
