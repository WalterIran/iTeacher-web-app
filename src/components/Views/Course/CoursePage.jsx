import Course from './Course'
import Header from '../../UI/Header/Header'
import Page from '../../UI/Page/Page'
import { useContext } from 'react';
import AuthContext from '../../../context/AuthProvider';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { axiosPrivate } from '../../../api/axios';
import { useNavigate } from 'react-router-dom';

const CoursePage = () => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: async (formValues) => {
      try {
        const res = await axiosPrivate.post(`/courses/create`,
          {
            ...formValues,
            userId: auth.user._id
          }
        )
        navigate(-1);
      } catch (error) {
        console.error(error);
      }
    }
  });

  return (
    <Page
      header={<Header />}
    >
      <Course
        teacher={auth.user}
        formik={formik}
      />
    </Page>
  )
}

export default CoursePage;

const initialValues = {
  courseName: '',
  courseDescription: ''
}
const validationSchema = {
  courseName: Yup.string().required(),
  courseDescription: Yup.string().required()
}