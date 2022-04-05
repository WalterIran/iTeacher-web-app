import styles from './Review.module.css';

import { default as ReviewComponent} from '../../UI/Review/Review';
import { PrimaryButton } from '../../UI/Form/Button/Button';
import { useContext } from 'react';
import AuthContext from '../../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Review = ({formik, course, reviews, loadMore, nextPage}) => {

    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

  return (
    <div className={styles.container}>
        <div className={[styles.section, styles.info].join(' ')}>
            <div className={styles.title}>
                <h2>{course?.courseName}</h2>
                <p>{course?.courseDescription}</p>
            </div>
            <div className={styles.courseData}>
                <div className="">
                    <span className={[styles.bold]}>Rating: </span>
                    <span className="">{course?.rating}</span>
                </div>
                <div className="">
                    <span className={[styles.bold]}>Total reviews: </span>
                    <span className="">{course?.totalReviews}</span>
                </div>
                <div className="">
                    <span className={[styles.bold]}>Total students: </span>
                    <span className="">{course?.totalReviews}</span>
                </div>
                <div className="">
                    <span className={[styles.bold]}>Course Status: </span>
                    <span className={course?.courseStatus}>{course?.courseStatus === 'ACT' ? 'Active' : 'Inactive'}</span>
                </div>
            </div>
        </div>
        <div className={styles.section}>
            <div className="">
                <h3>Reviews</h3>
                <hr />
            </div>
            <div className={styles.reviews}>
                {
                    reviews.length > 0 ? (
                        <>
                            {
                                reviews.map((item, idx) => {
                                    return(
                                        <ReviewComponent 
                                            key={idx}
                                            {...item}
                                        />
                                    );
                                })
                            }
                            {
                                nextPage && (
                                    <PrimaryButton onClick={loadMore}>
                                        Load More
                                    </PrimaryButton>
                                )
                            }
                        </>
                     ) : (
                         <h4>No reviews yet...</h4>
                     )
                }
            </div>
        </div>
        <div className={styles.section}>
            <div className="">
                <h3>Add a review</h3>
                <hr />
            </div>
            <div className={styles.addReview}>
            {
                auth.user ? (
                    <>
                        <div className={styles.reviewForm}>
                            <input 
                                type="text"
                                placeholder='Title'
                                value={formik.values.reviewTitle}
                                onChange={(e) => formik.setFieldValue('reviewTitle', e.target.value)}
                                className={styles.input}
                            />
                            <textarea
                                type="text"
                                placeholder='Description'
                                multiple
                                value={formik.values.reviewDescription}
                                onChange={(e) => formik.setFieldValue('reviewDescription', e.target.value)}
                                className={[styles.input, styles.textarea].join(' ')}
                            />
                            <div className={styles.reviewPost}>
                                <select name="review" id="review" className={styles.combobox} onChange={(e) => formik.setFieldValue('rating', e.target.value)} value={formik.values.rating} >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                                <PrimaryButton type="button" onClick={formik.handleSubmit}>
                                    Post
                                </PrimaryButton>
                            </div>
                        </div>
                        <div className={styles.reviewNote}>
                            <p className="">
                                *Note:
                                This comments are anonymous, which means that nobody will know who this comment is from. Please write constructive comments to help your teacher improve and keep growing his community. If you post anything offensive you will be banned from the platform.
                            </p>
                        </div>
                    </>
                ) : (
                    <PrimaryButton onClick={() => navigate('/login')}>
                        Login to Add Review
                    </PrimaryButton>
                )
            }
            </div>
        </div>
    </div>
  )
}

export default Review;