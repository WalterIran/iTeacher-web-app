import React from 'react';
import styles from './Profile.module.css';
import { Icon } from '@iconify/react';
import ProfileCourse from '../../UI/ProfileCourse/ProfileCourse';

const Profile = () => {
  return (
    <section className={styles.container}>
        <div className={styles.upperContainer}>
            <div className={styles.coverImgContainer}>
                <img src="http://via.placeholder.com/1366x200" alt="cover pic" />
            </div>
            <div className={styles.generalInfoContainer}>
                <div className={styles.upperInfoContainer}>
                    <div className={styles.upperInfoLeft}>
                        <img src="http://via.placeholder.com/168x168" alt="profile pic" />
                        <div className={styles.nameContainer}>
                            <h2>Walter Amador</h2>
                            <p>Programming teacher</p>
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
                                <span className={styles.infoSubTitle}>Title: </span><span>Computer Science Engineer</span>
                            </p>
                            <p>
                                <span className={styles.infoSubTitle}>Total Students: </span><span>200</span>
                            </p>
                            <p>
                                <span className={styles.infoSubTitle}>Total reviews: </span><span>80</span>
                            </p>
                            <p>
                                <span className={styles.infoSubTitle}>Total classes: </span><span>4</span>
                            </p>
                        </div>
                        <div className={styles.infoSection}>
                            <p className={styles.infoSubTitle}>Institutions</p>
                            <ul>
                                <li>UNICAH</li>
                                <li>UNAH</li>
                                <li>UNITEC</li>
                            </ul>
                        </div>
                        <div className={styles.infoSection}>
                            <p className={styles.infoSubTitle}>Platforms</p>
                            <ul>
                                <li>Coursera</li>
                                <li>Udemy</li>
                                <li>Platzi</li>
                            </ul>
                        </div>
                        <div className={styles.infoSection}>
                            <p className={styles.infoSubTitle}>About me:</p>
                            <p>Dedicated, resourceful and goal-driven professional educator with a solid commitment to the social and academic growth and development of every student</p>
                        </div>
                    </div>
                </div>
                <hr style={{margin: '2rem 0'}} />
            </div>
        </div>
        <div className={styles.lowerContainer}>
            <div className={styles.coursesGeneralTitle}>
                <h3>COURSES</h3>
                <div className={styles.search_container}>
                    <input type="text" placeholder="Search teacher's courses" />
                    <Icon color='#999' icon="akar-icons:search" />
                </div>
            </div>
            <div className={styles.coursesSection}>
                <ProfileCourse />
                <ProfileCourse />
                <ProfileCourse />
                <ProfileCourse />
                <ProfileCourse />
                <ProfileCourse />
                <ProfileCourse />
                <ProfileCourse />
            </div>
        </div>
    </section>
  )
}

export default Profile;