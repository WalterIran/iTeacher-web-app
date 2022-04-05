import Registration from './Student.registration'
import Header from '../../../UI/Header/Header'
import Page from '../../../UI/Page/Page'

const StudentRegister = () => {
  return (
    <Page
      header={<Header/>}
    >
        <Registration />
    </Page>
  )
}

export default StudentRegister