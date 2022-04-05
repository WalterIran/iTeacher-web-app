import Register from './Register.options'
import Header from '../../../UI/Header/Header'
import Page from '../../../UI/Page/Page'

const RegisterOption = () => {
  return (
    <Page
      header={<Header showSearch={false}/>}
    >
        <Register />
    </Page>
  )
}

export default RegisterOption