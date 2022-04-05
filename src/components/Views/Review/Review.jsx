import './Review.css';
import { PrimaryButton, } from '../../UI/Form/Button/Button';
import { PrimaryInput } from '../../UI/Form/Input/Input';
import React, { useRef, useState } from 'react';
import { publicAxios } from '../../../Lib/apiClient';


const Review = ({
    txtTitleValue,
    txtDescriptionValue,
    txtRating,
    onChange: onChangeHandler,
    onConfirmClick,
    course

}
) => {

    return (
        <div className="containerRv">
            <div className="rowRv" style={{ padding: 0, margin: 25 }}>
                <div className="colRv-md-8">
                    <h2 style={{ margin: 20 }}>{course?.courseName}</h2>
                    <p style={{ padding: 0, margin: 0 }}><br />{course?.courseDescription}<br /><br /></p>
                </div>
                <div className="colRv-md-3" style={{ margin: '-2px', marginTop: 20, width: 186, height: 244 }}>
                    <p style={{ height: 60, margin: 0, marginTop: 0, textAlign: 'left' }}><br />Rating: {course?.rating}<br /><br /></p>
                    <p style={{ margin: 0, height: 60, textAlign: 'left' }}><br />Total reviews: {course?.totalReviews}<br /><br /></p>
                    <p style={{ margin: 0, height: 60, textAlign: 'left' }}><br />Course status: {course?.status}<br /><br /></p>
                </div>
            </div>
            <h2 style={{ margin: 30 }}>Reviews</h2>
            <div className="rowRv" style={{ margin: 22 }}>
                <div className="colRv" style={{ borderRadius: 15, background: '#ffffff', margin: 0, color: 'rgb(33, 37, 41)', boxShadow: '-5px 5px 5px rgba(33,37,41,0.16), 5px 0px 5px rgba(33,37,41,0.16)', border: '4px none rgba(0,0,0,0)', marginRight: 20, marginLeft: 20 }}>
                    <h3 style={{ borderRadius: 0, borderTopLeftRadius: 31, margin: 0 }}>Excellent course</h3>
                    <p style={{ padding: 0 }}><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br /></p>
                    <p style={{ textAlign: 'right' }}>Anonymus123</p>
                </div>
            </div>
            <div className="rowRv" style={{ margin: 22 }}>
                <div className="colRv" style={{ borderRadius: 15, background: '#ffffff', margin: 0, color: 'rgb(33, 37, 41)', boxShadow: '-5px 5px 5px rgba(33,37,41,0.16), 5px 0px 5px rgba(33,37,41,0.16)', border: '4px none rgba(0,0,0,0)', marginRight: 20, marginLeft: 20 }}>
                    <h3 style={{ borderRadius: 0, borderTopLeftRadius: 31, margin: 0 }}>Excellent course</h3><p style={{ padding: 0 }}><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br /></p>
                    <p style={{ textAlign: 'right' }}>Anonymus123</p>
                </div>
            </div>
            <div className="rowrv" style={{ margin: 22 }}>
                <div className="colRv" style={{ borderRadius: 15, background: '#ffffff', margin: 0, color: 'rgb(33, 37, 41)', boxShadow: '-5px 5px 5px rgba(33,37,41,0.16), 5px 0px 5px rgba(33,37,41,0.16)', border: '4px none rgba(0,0,0,0)', marginRight: 20, marginLeft: 20 }}>
                    <h3 style={{ borderRadius: 0, borderTopLeftRadius: 31, margin: 0 }}>Excellent course</h3> <p style={{ padding: 0 }}><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br /></p>
                    <p style={{ textAlign: 'right' }}>Anonymus123</p>
                </div>
            </div>
            <h2 style={{ margin: 30 }}>Add a review</h2>
            <div className="inputTitle">
                <PrimaryInput style={{ outline: "none", border: "none", height: "4vw", borderRadius: 5, background: '#EEEEEE' }}
                    type="text"
                    placeholder="TITLE"
                    name="Title"
                    value={txtTitleValue}
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
                    <h3 style={{ borderRadius: 0, borderTopLeftRadius: 31, margin: 25 }}>Rating</h3>
                    <select className="dropdown-list__item"
                        name="Rating"
                        id="rating"
                        value={txtRating}
                        onChange={onChangeHandler}

                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="buttonPost">
                    <PrimaryButton onClick={onConfirmClick}
                    >Post</PrimaryButton>
                </div>
            </div>








        </div>


    )
}

export default Review;