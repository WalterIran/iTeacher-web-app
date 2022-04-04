import React, { useEffect } from 'react';
import styles from './SearchResult.module.css';

//Components
import { BaseButton, PrimaryButton } from '../Form/Button/Button';
import axios from '../../../api/axios';


const SearchResult = () => {

    useEffect(() => {
      try {
          const testFetchData = async () => {
              const res = await axios.get('/courses/search',
                {
                    params: {
                        value: 'Walter'
                    }
                }
              );
              console.log(res);
          }
          testFetchData();
      } catch (error) {
          
      }
    }, [])

  return (
    <div className={styles.container}>
        <div className={styles.teacherInfo}>
            <img src="http://via.placeholder.com/110x110" alt="profile pic" className="" />
            <h4 className="">Walter Amador</h4>
            <p className="">Programming teacher</p>
            <BaseButton>
                Teacher Profile
            </BaseButton>
        </div>
        <div className={styles.courseInfo}>
            <div className={styles.spaceBetween}>
                <h3 className="">Web Development</h3>
                <p className="">5.0</p>
            </div>
            <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolores, ullam facere, atque, debitis minus sequi fugiat aut accusamus distinctio voluptatum maiores nostrum. Corrupti voluptas, quas id asperiores reprehenderit eveniet.
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