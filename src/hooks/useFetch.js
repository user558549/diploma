import { useEffect, useState, useCallback } from "react";
import { request } from "../utils/request";

export const useFetch = (url, method, data) => {
  const [serverData, setServerData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    const getFunction = async () => {
      try {
        const getResult = await request(url, method, data);
        if (getResult) {
          setServerData(getResult);
        } else {
          setServerData([]);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getFunction();
  }, [url, method, data, refreshTrigger]);

  const refetch = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  return { serverData, isLoading, error, refetch };
};
