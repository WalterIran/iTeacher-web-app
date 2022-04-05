import Registration from './Student.registration'
import Header from '../../../UI/Header/Header'
import Page from '../../../UI/Page/Page'

const StudentRegister = () => {

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