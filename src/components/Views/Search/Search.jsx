import React from 'react';
import { PrimaryButton } from '../../UI/Form/Button/Button';
import SearchResult from '../../UI/SearchResult/SearchResult';
import styles from './Search.module.css';

const Search = ({results, nextPage, onLoadMore}) => {
  return (
    <>
        <h3 className={styles.title}>{results.length} results found</h3>
        <div className={styles.results}>
            {
              results?.map((item) => {
                return(
                  <SearchResult
                    key={item?._id}
                    courseName={item?.courseName}
                    courseDescription={item?.courseDescription}
                    teacherId={item?.teacherInfo[0]?._id}
                    teacherName={item?.teacherInfo[0]?.username}
                    teacherType={item?.teacherInfo[0]?.teacherType}
                  />
                );
              })
            }
          { nextPage && (
            <PrimaryButton onClick={onLoadMore}>
              Load More
            </PrimaryButton>
          )}
        </div>
    </>
  )
}

export default Search