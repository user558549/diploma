import { useEffect, useState, useCallback } from "react";

export const useFetch = (operation, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    const getFunction = async () => {
      try {
        const getResult = await operation(params);
        if (getResult) {
          setData(getResult);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFunction();
  }, [operation, params, refreshTrigger]);

  const refetch = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  return { data, isLoading, error, refetch };
};
