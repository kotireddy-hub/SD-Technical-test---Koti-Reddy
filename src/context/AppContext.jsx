import React, { createContext, useCallback, useContext, useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const AppContext = createContext({});

export default function AppProvider({ children }) {
  const { data, loading, error } = useFetch(
    `https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&context=embed`
  );

  const [readList, setReadList] = useState([]);

  const addToReadList = useCallback((post) => {
    setReadList((prevList) => [...prevList, post]);
  }, []);

  const removeFromReadList = useCallback((postId) => {
    setReadList((prevList) => prevList.filter((post) => post.id !== postId));
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        error,
        readList,
        addToReadList,
        removeFromReadList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
