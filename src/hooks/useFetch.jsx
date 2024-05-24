import React, { useEffect, useState } from 'react';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const api = await fetch(url);
        const data = await api.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    })();
  }, [url]);

  return { data, loading, error };
}
