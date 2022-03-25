import { BaseButton, PrimaryButton, SecondaryButton } from '../../../UI/Form/Button/Button';
import { PrimaryInput, SecondaryInput } from '../../../UI/Form/Input/Input';
import { Icon } from '@iconify/react';
import './Student.registration.css'

const StudentRegister = () => {

    return (
        <div className="container-signup">
            <div className="forms-container">
                <div className="signup-form">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <PrimaryInput type="text" placeholder="Nombre(s)" />
                        </div>
                        <div className="input-field">
                            <Icon className="fas fa-lock"></Icon>
                            <PrimaryInput type="text" placeholder="Apellido(s)" />
                        </div>
                        <div className="input-field">
                            <Icon className="fas fa-lock"></Icon>
                            <PrimaryInput type="text" placeholder="E-mail" />
                        </div>
                        <div className="input-field">
                            <Icon className="fas fa-lock"></Icon>
                            <PrimaryInput type="password" placeholder="Password" />
                        </div>
                        <div className="input-field">
                            <Icon className="fas fa-lock"></Icon>
                            <PrimaryInput type="password" placeholder="Confirm password" />
                        </div>
                        <PrimaryButton className="btn solid" >
                            Signup
                        </PrimaryButton>

                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>STUDENT</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                    </div>
                    <img src="/student.svg" className="image" alt="" />
                </div>
            </div>
        </div>



    )
}

export default StudentRegister;