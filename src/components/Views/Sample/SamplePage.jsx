import Sample from './Sample'
import Header from '../../UI/Header/Header'
import Page from '../../UI/Page/Page'

const SamplePage = () => {
  return (
    <Page
        header={<Header />}
    >
        <Sample />
    </Page>
  )
}

export default SamplePage