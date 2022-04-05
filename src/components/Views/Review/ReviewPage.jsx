import { useEffect, useState } from 'react';
import Review from './Review'
import Header from '../../UI/Header/Header'
import Page from '../../UI/Page/Page'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../../../api/axios';
import axiosOriginal from 'axios';


const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [course, setCourse] = useState(null);

    
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
        console.log(formValues);
      } catch (error) {
        console.error(error);
      }
    }
  });

  useEffect(() => {
    (async () => {
      const res = await axios.get(`/courses/byid/${'621eecae65b5df2023feb2df'}`);
      setCourse(res.data.result);

      const res2 = await axios.get(`/courses/byid/${'621eecae65b5df2023feb2df'}/reviews`);
      setReviews(res2.data.results.docs);
      setNextPage(res2.data.nextPage);
    })();
  
    return () => {
      setReviews([]);
    }
  }, []);

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