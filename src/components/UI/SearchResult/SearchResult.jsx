import styles from './SearchResult.module.css';
import { useNavigate } from 'react-router-dom';

//Components
import { BaseButton, PrimaryButton } from '../Form/Button/Button';

const SearchResult = ({
    teacherId,
    teacherName, 
    teacherType,
    teacherImgUrl,
    courseId,
    courseName,
    courseRating = 0.0,
    courseDescription,
}) => {
    const navigate = useNavigate();

    const onProfileClick = (e) => {
        navigate(`/profile/${teacherId}`);
    }

  return (
    <div className={styles.container}>
        <div className={styles.teacherInfo}>
            <img src={teacherImgUrl || "http://via.placeholder.com/110x110"} alt="profile pic" className="" />
            <h4 className="">{teacherName}</h4>
            <p className="">{teacherType}</p>
            <BaseButton onClick={onProfileClick}>
                Teacher Profile
            </BaseButton>
        </div>
        <div className={styles.courseInfo}>
            <div className={styles.spaceBetween}>
                <h3 className="">{courseName}</h3>
                <p className="">{courseRating}</p>
            </div>
            <p className="">
                {courseDescription}
            </p>
            <div className="">
                <PrimaryButton className={styles.btnPrimary}>
                    Course Details
                </PrimaryButton>
            </div>
        </div>
    </div>
  )
}

export default SearchResult