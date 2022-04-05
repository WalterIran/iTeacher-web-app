import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../../api/axios';
import Header from '../../UI/Header/Header';
import Page from '../../UI/Page/Page';
import Profile from './Profile';

const ProfilePage = () => {
  const [teacher, setTeacher] = useState({});
  const params = useParams();

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/users/byid/${params.id}`);
      setTeacher(res.data.result);
      console.log(res.data.result)
    })();
  
    return () => {
      setTeacher({});
    }
  }, [params.id])
  
  return (
    <Page
        header={<Header />}
    >
        <Profile teacher={teacher} />
    </Page>
  )
}

export default ProfilePage;