import Review from './Review'
import Header from '../../UI/Header/Header'
import Page from '../../UI/Page/Page'
import { publicAxios } from '../../../Lib/apiClient';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


const ReviewPage = () => {
  const [txtTitle, settxtTitle] = useState('');
  const [txtDescription, setDescription] = useState('');
  const [txtRating, settxtRating] = useState('');
  const [course, setcourse] = useState({});
  const params = useParams();


  useEffect(() => {
    (async () => {
      const res = await publicAxios.get(`api/v1/courses/byid/621fa72c386309b3428473aa`);
      setcourse(res.data.result);
      console.log(res.data)
    })();

    return () => {
      setcourse({});
    }

  }, [params.id])


  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'Title':
        settxtTitle(value);
        break;
    }
    switch (name) {
      case 'Description':
        setDescription(value);
        break;
    }
    switch (name) {
      case 'Rating':
        settxtRating(value);
        break;
    }


  }
  const onConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(txtTitle)
    console.log(txtDescription)
    console.log(txtRating)

    // try {

    //   const data = publicAxios.post('/api/v1/courses/byid/:id/add-review',

    //     {
    //       //_id
    //       dataTitle: txtTitle,
    //       dataDescription: txtDescription,
    //       rating: txtRating
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
      <Review
        txtTitleValue={txtTitle}
        txtDescriptionValue={txtDescription}
        onChange={onChangeHandler}
        onConfirmClick={onConfirm}
        course={course}
      />

    </Page>
  )
}

export default ReviewPage