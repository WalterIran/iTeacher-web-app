import { useContext, useEffect, useState } from 'react';
import Review from './Review'
import Header from '../../UI/Header/Header'
import Page from '../../UI/Page/Page'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios, { axiosPrivate } from '../../../api/axios';
import axiosOriginal from 'axios';
import { useParams } from 'react-router-dom';
import AuthContext from '../../../context/AuthProvider';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [course, setCourse] = useState(null);
  const { auth } = useContext(AuthContext);
  const params = useParams();

  const initialValues = {
    reviewTitle: '',
    reviewDescription: '',
    rating: 1
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: async (formValues) => {
      try {
        const res = await axiosPrivate.post(`/courses/byid/${params.id}/add-review`,
          {
            ...formValues,
            studentId: auth.user._id
          }
        )
        const res2 = await axios.get(`/courses/byid/${params.id}/reviews`);
        setReviews(res2.data.results.docs);
        setNextPage(res2.data.nextPage);
        formik.resetForm();
      } catch (error) {
        console.error(error);
      }
    }
  });

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/courses/byid/${params.id}`);
      setCourse(res.data.result);

      const res2 = await axios.get(`/courses/byid/${params.id}/reviews`);
      setReviews(res2.data.results.docs);
      setNextPage(res2.data.nextPage);
    })();

    return () => {
      setReviews([]);
    }
  }, [params.id]);

  const loadMore = async () => {
    try {
      const res = await axiosOriginal.get(nextPage);
      setReviews([...reviews, ...res.data.results.docs]);
      setNextPage(res.data.nextPage);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Page
      header={<Header />}
    >
      <Review
        formik={formik}
        reviews={reviews}
        nextPage={nextPage}
        loadMore={loadMore}
        course={course}
      />

    </Page>
  )
}

export default ReviewPage;

const validationSchema = {
  reviewTitle: Yup.string().required("Required field"),
  reviewDescription: Yup.string(),
  rating: Yup.number("Select a number")
}