import { PrimaryButton,  } from '../../UI/Form/Button/Button';
import { PrimaryInput  } from '../../UI/Form/Input/Input';

import './Review.css';

const Review = () => {

   

    return (
        <div>


            <div>
                <div className="container">

                    <div className="row" style={{ padding: 0, margin: 25 }}>
                        <div className="col-md-8">
                            <h2 style={{ margin: 20 }}>Web Development</h2>
                            <p style={{ padding: 0, margin: 0 }}><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br /></p>
                        </div>
                        <div className="col-md-3" style={{ margin: '-2px', marginTop: 20, width: 186, height: 244 }}>
                            <p style={{ height: 60, margin: 0, marginTop: 0, textAlign: 'left' }}><br />Rating:<br /><br /></p>
                            <p style={{ margin: 0, height: 60, textAlign: 'left' }}><br />Total reviews:<br /><br /></p>
                            <p style={{ margin: 0, height: 60, textAlign: 'left' }}><br />Total students:<br /><br /></p>
                            <p style={{ margin: 0, height: 60, textAlign: 'left' }}><br />Course status:<br /><br /></p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 style={{ margin: 30 }}>Reviews</h2>
                    <div className="row" style={{ margin: 22 }}>
                        <div className="col" style={{ borderRadius: 15, background: '#ffffff', margin: 0, color: 'rgb(33, 37, 41)', boxShadow: '-5px 5px 5px rgba(33,37,41,0.16), 5px 0px 5px rgba(33,37,41,0.16)', border: '4px none rgba(0,0,0,0)', marginRight: 20, marginLeft: 20 }}>
                            <h3 style={{ borderRadius: 0, borderTopLeftRadius: 31, margin: 0 }}>Excellent course</h3>
                            <p style={{ padding: 0 }}><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br /></p>
                            <p style={{ textAlign: 'right' }}>Anonymus123</p>
                        </div>
                    </div>
                    <div className="row" style={{ margin: 22 }}>
                        <div className="col" style={{ borderRadius: 15, background: '#ffffff', margin: 0, color: 'rgb(33, 37, 41)', boxShadow: '-5px 5px 5px rgba(33,37,41,0.16), 5px 0px 5px rgba(33,37,41,0.16)', border: '4px none rgba(0,0,0,0)', marginRight: 20, marginLeft: 20 }}>
                            <h3 style={{ borderRadius: 0, borderTopLeftRadius: 31, margin: 0 }}>Excellent course</h3><p style={{ padding: 0 }}><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br /></p>
                            <p style={{ textAlign: 'right' }}>Anonymus123</p>
                        </div>
                    </div>
                    <div className="row" style={{ margin: 22 }}>
                        <div className="col" style={{ borderRadius: 15, background: '#ffffff', margin: 0, color: 'rgb(33, 37, 41)', boxShadow: '-5px 5px 5px rgba(33,37,41,0.16), 5px 0px 5px rgba(33,37,41,0.16)', border: '4px none rgba(0,0,0,0)', marginRight: 20, marginLeft: 20 }}>
                            <h3 style={{ borderRadius: 0, borderTopLeftRadius: 31, margin: 0 }}>Excellent course</h3> <p style={{ padding: 0 }}><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /><br /></p>
                            <p style={{ textAlign: 'right' }}>Anonymus123</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 style={{ margin: 30 }}>Add a review</h2>


                    <div className="inputTitle">
                        <PrimaryInput style={{ outline: "none", border: "none" ,height: "2=3vw",borderRadius: 5, background: '#EEEEEE' }} type="text" placeholder="TITLE" />
                    </div>
                    <div className="inputDescription">
                        <PrimaryInput style={{ outline: "none", border: "none" ,height: "10vw", borderRadius: 15, background: '#EEEEEE' }} type="text" placeholder="DESCRIPTION" />
                        <div className="buttonPost">
                            <PrimaryButton>Post</PrimaryButton>
                        </div>
                    </div>



                </div>

            </div>


        </div>
    )
}

export default Review;