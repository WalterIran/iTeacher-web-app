import Teacher from './Teacher'
import Header from '../../UI/Header/Header'
import Page from '../../UI/Page/Page'

const TeacherPage = () => {
  return (
    <Page
        header={<Header />}
    >
        <Teacher />
    </Page>
  )
}

export default TeacherPage