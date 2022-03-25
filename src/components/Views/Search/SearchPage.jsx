import React from 'react';
import Search from './Search';

//Components
import Page from '../../UI/Page/Page';
import Header from '../../UI/Header/Header';

const SearchPage = () => {
  return (
    <Page
        header={<Header />}
    >
        <Search />
    </Page>
  )
}

export default SearchPage;