import Course from './Course'
import Header from '../../UI/Header/Header'
import Page from '../../UI/Page/Page'
import { useEffect, useState } from 'react';
import { publicAxios } from '../../../Lib/apiClient';
import { useParams } from 'react-router-dom';

const CoursePage = () => {
  const [teacher, setTeacher] = useState({});
  const params = useParams();
  const [txtCourse, settxtCourse] = useState('');
  const [txtDescription, setDescription] = useState('');
  const [txtStatus, settxtStatus] = useState('');

  useEffect(() => {
    (async () => {
      const res = await publicAxios.get(`api/v1/users/byid/621a70819949f3759995cbf9`);
      setTeacher(res.data.result);
      console.log(res.data)
    })();

    return () => {
      setTeacher({});
    }

  }, [params.id])

  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'Course':
        settxtCourse(value);
        break;
      case 'Description':
        setDescription(value);
        break;
      case 'Status':
        settxtStatus(value);
        break;
    }

  }
  const onConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(txtCourse)
    console.log(txtDescription)
    console.log(txtStatus)

    // try {

    //   const data = publicAxios.post('/api/v1/courses/create',

    //     {
    //       //userId:
    //       courseName: txtCourse,
    //       courseDescription: txtDescription,
    //       courseStatus: txtStatus
    //     });

    //   console.log('Post request: ', data)
    // } catch (ex) {
    //   console.log('Error on Post request', ex)
    // }

  }

  return (
    <Page
      header={<Header />}
    >
      <Course
        txtCourseValue={txtCourse}
        txtDescriptionValue={txtDescription}
        txtStatusValue={txtStatus}
        onChange={onChangeHandler}
        onConfirmClick={onConfirm}
        teacher={teacher}


      />
    </Page>
  )
}

export default CoursePage