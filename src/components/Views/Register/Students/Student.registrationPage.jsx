import { useState } from 'react';
import Registration from './Student.registration'
import Header from '../../../UI/Header/Header'
import Page from '../../../UI/Page/Page'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import axios from '../../../../api/axios';

const StudentRegister = () => {
  const navigate = useNavigate();
  const [txtNombre, setTxtNombre] = useState('');
  const [txtApellido, setTxtApellido] = useState('');
  const [txtEmail, setTxtEmail] = useState('');
  const [txtPassword, setTxtPassword] = useState('');
  const [txtConfirmPassword, setTxtConfirmPassword] = useState('');
  const onChangeHandler = ({ target: { name, value } }) => {
    switch (name) {
      case 'txtNombre':
        setTxtNombre(value);
        break;
      case 'txtApellido':
        setTxtApellido(value);
        break;
      case 'txtEmail':
        setTxtEmail(value);
        break;
      case 'txtPassword':
        setTxtPassword(value);
        break;
      case 'txtConfirmPassword':
        setTxtConfirmPassword(value);
        break;
      default:
        console.log("Hello World");
        break;
    }
  }
  const onConfirm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const data = await axios.post(
        '/auth/student-signup',
        {
          name: txtNombre,
          surname: txtApellido,
          email: txtEmail,
          password: txtPassword,
          confirmPassword: txtConfirmPassword
        }
      );
      console.log('Signup Request: ', data)
      navigate('/login');
    } catch (ex) {
      console.log('Error on Signup submit', ex);
    }
  }
  const onLogin = async (e)=>{
    e.preventDefault();
    e.stopPropagation();
    navigate('/login')
  
  }
  return (
    <Page
      header={<Header showSearch={false} />}
    >
      <Registration

      />
    </Page>
  )
}

export default StudentRegister