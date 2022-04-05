import styles from './ProfileCourse.module.css';
import { PrimaryButton } from '../Form/Button/Button';

const ProfileCourse = () => {
  return (
    <div className={styles.course}>
        <div className={styles.spaceBetween}>
            <h4 className={styles.courseTitle}>Web Development</h4>
            <p className={styles.courseTitle}>5.0</p>
        </div>
        <div className={styles.spaceBetween}>
            <div className="">
                <span className={styles.subtitle}>Status: </span>
                <span className="">Active</span>
            </div>
            <div className="">
                <span className={styles.subtitle}>Students: </span>
                <span className="">50</span>
            </div>
        </div>
        <div className={styles.widthFull}>
            <span className={styles.subtitle}>Course link: </span>
            <a href="about:blank" target="_blank" rel="noreferrer" className={styles.link}>https://www.example.com/link-to-my-course--lorem-lorem-lorem</a>
        </div>
        <div className={styles.btnSection}>
            <PrimaryButton className={styles.btn}>
                Details
            </PrimaryButton>
        </div>
    </div>
  )
}

export default ProfileCourse;