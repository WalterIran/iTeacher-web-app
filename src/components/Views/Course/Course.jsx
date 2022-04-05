import './Course.css';
import { PrimaryButton, } from '../../UI/Form/Button/Button';
import { PrimaryInput } from '../../UI/Form/Input/Input';

const Course = ({
    formik,
    teacher
}

) => {

    return (
        <div className="containerCs">
            <div>
                <div style={{ boxShadow: '-5px 5px 5px rgba(33,37,41,0.16), 0px -5px 5px rgba(33,37,41,0.16), 0px -5px 5px rgba(33,37,41,0.16)', borderRadius: 20, marginTop: 30 }}>
                    <div className="rowCs">
                        <div className="col-md-6 col-xl-9 col-xxl-9">
                            <h2><br />{teacher.username}<br /><br /></h2>
                            <p>{teacher.teacherType}</p>
                        </div>
                    </div>
                </div>
                <div style={{ boxShadow: '-5px 5px 5px rgba(33,37,41,0.16), 0px -5px 5px rgba(33,37,41,0.16), 0px -5px 5px rgba(33,37,41,0.16)', borderRadius: 20, marginTop: 40 }}>
                    <h2 style={{ margin: 30 }}>Add a course</h2>
                    <div className="inputTitle">
                        <PrimaryInput style={{ outline: "none", border: "none", height: "4vw", borderRadius: 5, background: '#EEEEEE' }}
                            type="text"
                            placeholder="Course Name"
                            name="courseName"
                            value={formik.values.courseName}
                            onChange={(e) => formik.setFieldValue('courseName', e.target.value)}

                        />
                    </div>
                    <div className="inputDescription">
                        <PrimaryInput style={{ outline: "none", border: "none", height: "10vw", borderRadius: 15, background: '#EEEEEE' }}
                            type="text"
                            placeholder="Description"
                            name="courseDescription"
                            value={formik.values.courseDescription}
                            onChange={(e) => formik.setFieldValue('courseDescription', e.target.value)}
                        />
                        <div className="buttonPost">
                            <PrimaryButton 
                                onClick={formik.handleSubmit}
                                type='button'
                            >
                                ACCEPT
                            </PrimaryButton>
                        </div>
                        <div style={{ height: 15 }}></div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Course;