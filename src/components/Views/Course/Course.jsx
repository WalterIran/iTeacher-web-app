import './Course.css';
import { PrimaryButton, } from '../../UI/Form/Button/Button';
import { PrimaryInput } from '../../UI/Form/Input/Input';
import React, { useRef, useState } from 'react';

const Course = ({
    txtCourseValue,
    txtDescriptionValue,
    txtStatusValue,
    onChange: onChangeHandler,
    onConfirmClick,
    teacher
}

) => {

    return (


        <div>
            <div>
                <div style={{ boxShadow: '-5px 5px 5px rgba(33,37,41,0.16), 0px -5px 5px rgba(33,37,41,0.16), 0px -5px 5px rgba(33,37,41,0.16)', borderRadius: 20, marginTop: 30 }}>
                    <div className="row">
                        <div className="col-md-6 col-xl-3 col-xxl-3"><img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 50 }} /></div>
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
                            placeholder="CLASS NAME"
                            name="Course"
                            value={txtCourseValue}
                            onChange={onChangeHandler}

                        />
                    </div>
                    <div className="inputDescription">
                        <PrimaryInput style={{ outline: "none", border: "none", height: "10vw", borderRadius: 15, background: '#EEEEEE' }}
                            type="text"
                            placeholder="DESCRIPTION"
                            name="Description"
                            value={txtDescriptionValue}
                            onChange={onChangeHandler}

                        />
                        <div class="dropdown" >
                            <h3 style={{ borderRadius: 0, borderTopLeftRadius: 31, margin: 25 }}>Status</h3>
                            <select className="dropdown-list__item"
                                name="Status"
                                id="Status"
                                value={txtStatusValue}
                                onChange={onChangeHandler}

                            >
                                <option value="-">-</option>
                                <option value="ACT">Active</option>
                                <option value="INACTIVE">Inactive</option>

                            </select>
                        </div>
                        <div className="buttonPost">
                            <PrimaryButton onClick={onConfirmClick}
                            >ACCEPT</PrimaryButton>
                        </div>
                        <div style={{ height: 15 }}></div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Course;