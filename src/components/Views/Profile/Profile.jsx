import { useContext, useEffect, useState } from 'react';
import styles from './Profile.module.css';
import { Icon } from '@iconify/react';
import ProfileCourse from '../../UI/ProfileCourse/ProfileCourse';
import axios from '../../../api/axios';
import { PrimaryButton } from '../../UI/Form/Button/Button';
import {defautl as axiosOriginal} from 'axios';
import AuthContext from '../../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Profile = ({teacher}) => {
    const [courses, setCourses] = useState([]);
    const [nextPage, setNextPage] = useState(null);
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(teacher){
            (async () => {
                const res = await axios.get(`/courses/teacher-courses/${teacher?._id}/list-courses`);
                setCourses(res.data.results.docs);
                setNextPage(res.data.nextPage);
            })();
        }
    
      return () => {
        setCourses([])
      }
    }, [teacher]);
    
    const onLoadMore = async () => {
        try {
          const res = await axiosOriginal.get(nextPage);
          setCourses([...courses, ...res.data.results.docs]);
          setNextPage(res.data.nextPage);
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <section className={styles.container}>
        <div className={styles.upperContainer}>
            <div className={styles.coverImgContainer}>
            </div>
            <div className={styles.generalInfoContainer}>
                <div className={styles.upperInfoContainer}>
                    <div className={styles.upperInfoLeft}>
                        <img style={{objectFit: 'contain', backgroundColor: '#fff'}} src={teacher?.profileImg || "http://via.placeholder.com/168x168"} alt="profile pic" />
                        <div className={styles.nameContainer}>
                            <h2>{teacher?.username}</h2>
                            <p>{teacher?.teacherType}</p>
                        </div>
                    </div>
                    <div className={styles.upperInfoRight}>
                        <span>Share</span>
                        <Icon icon="bxl:facebook" />
                        <Icon icon="logos:twitter" />
                        <Icon icon="logos:linkedin-icon" />
                        <Icon icon="logos:whatsapp" />
                    </div>
                </div>
                <div className={styles.lowerInfoContainer}>
                    <h3>ABOUT</h3>
                    <div className={styles.lowerDescContainer}>
                        <div className={styles.infoSection}>
                            <p>
                                <span className={styles.infoSubTitle}>Title: </span><span>{teacher?.about?.title}</span>
                            </p>
                            <p>
                                <span className={styles.infoSubTitle}>Total Students: </span><span>{teacher?.about?.totalStudents}</span>
                            </p>
                            <p>
                                <span className={styles.infoSubTitle}>Total reviews: </span><span>{teacher?.about?.totalReviews}</span>
                            </p>
                            <p>
                                <span className={styles.infoSubTitle}>Total classes: </span><span>{teacher?.about?.totalClasses}</span>
                            </p>
                        </div>
                        <div className={styles.infoSection}>
                            <p className={styles.infoSubTitle}>Institutions</p>
                            <ul>
                                {teacher?.about?.institutions.map((item, idx) => {
                                    return(
                                        <li key={idx}>{item}</li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className={styles.infoSection}>
                            <p className={styles.infoSubTitle}>Platforms</p>
                            <ul>
                                {teacher?.about?.platforms.map((item, idx) => {
                                    return(
                                        <li key={idx}>{item}</li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className={styles.infoSection}>
                            <p className={styles.infoSubTitle}>About me:</p>
                            <p>{teacher?.about?.description}</p>
                        </div>
                    </div>
                </div>
                <hr style={{margin: '2rem 0'}} />
            </div>
        </div>
        <div className={styles.lowerContainer}>
            <div className={styles.coursesGeneralTitle}>
                <h3>COURSES</h3>
                {
                    auth?.user?._id === teacher?._id && 
                    <PrimaryButton onClick={() => navigate('/add-course')}>
                        Add Course
                    </PrimaryButton>
                }
            </div>
            <div className={styles.coursesSection}>
                {
                    courses.map(course => {
                        return(
                            <ProfileCourse
                                key={course._id}
                                {...course}
                            />
                        );
                    })
                }
                {
                    nextPage && (
                        <PrimaryButton onClick={onLoadMore}>
                            Load More
                        </PrimaryButton>
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Profile;