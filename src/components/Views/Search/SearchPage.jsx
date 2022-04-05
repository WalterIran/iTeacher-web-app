import { useEffect, useState } from 'react';
import Search from './Search';
import { useLocation } from 'react-router-dom';
import axios from '../../../api/axios';
import {default as axiosOriginal} from 'axios';

//Components
import Page from '../../UI/Page/Page';
import Header from '../../UI/Header/Header';

const searchURL = '/courses/search'

const SearchPage = () => {
  let location = useLocation();
  const [ results, setResults ] = useState([]);
  const [ nextPage, setNextPage ] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(searchURL,{
          params: {
            value: location.state.search
          }
        });
        setResults(res.data.results.docs);
        setNextPage(res.data.nextPage);
      } catch (error) {
        console.log(error);
      }
    })();
  
    return () => {
      setResults([]);
    }
  }, [location.state]);

  const onLoadMore = async () => {
    try {
      const res = await axiosOriginal.get(nextPage,{
        params: {
          value: location.state.search
        }
      });
      setResults([...results, ...res.data.results.docs]);
      setNextPage(res.data.nextPage);
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <Page
        header={<Header />}
    >
        <Search results={results} nextPage={nextPage} onLoadMore={onLoadMore} />
    </Page>
  )
}

export default SearchPage;