import React from 'react';
import SearchResult from '../../UI/SearchResult/SearchResult';
import styles from './Search.module.css';

const Search = () => {
  return (
    <>
        <h3 className={styles.title}>3 results</h3>
        <div className={styles.results}>
            <SearchResult />
            <SearchResult />
            <SearchResult />
        </div>
    </>
  )
}

export default Search