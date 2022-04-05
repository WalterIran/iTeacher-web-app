import React from 'react'
import Header from '../../UI/Header/Header';
import Page from '../../UI/Page/Page';
import Profile from './Profile';

const ProfilePage = () => {
  return (
    <Page
        header={<Header />}
    >
        <Profile />
    </Page>
  )
}

export default ProfilePage;