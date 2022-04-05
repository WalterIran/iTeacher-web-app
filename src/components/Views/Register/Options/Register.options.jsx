import { Icon } from '@iconify/react';
import './Register.options.css'

const Register = () => {

  return (
    <div className='container'>
      <div className='box'>
        <h1>Register Options</h1>
        <div className='cards'>
          <div className='card'>
            <div className='card-thumb'>
              <Icon icon="fa-solid:chalkboard-teacher" color="#ffcc4d" />
            </div>
            <div className='card-content'>
              <h2 className='card-title'>
                TEACHER
              </h2>
              <p className='card-excerpt'>
                <span className='info'>Create, display classes, review comments.</span>
                <span className='desc'>Create a profile to display your classes, allow your students to comment and rate you. Your future stuents will be able to review you.</span>
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='card-thumb'>
              <Icon icon="ph:student-fill" color="#ffcc4d" className='Img' />
            </div>
            <div className='card-content'>
              <h2 className='card-title'>
                STUDENT
              </h2>
              <p className='card-excerpt description' >
                <span className='info'>Review, Comment, Rank the teachers you know.</span>
                <span className='desc'>Create a profile to display your classes, allow your students to comment and rate you. Your future stuents will be able to review you.</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Register;