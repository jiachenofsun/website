
import {PageContainer} from '../theme'
import {SectionBanner} from '../organisms/SectionBanner'
import {VHSBanner} from '../organisms/VHSBanner'

export const Home = (): JSX.Element => {
  return (
    <PageContainer>
      <VHSBanner />
      <SectionBanner 
        bgUrl={`${process.env.PUBLIC_URL}/media/tiggy.jpg`} 
        path='/photos' 
        text="PHOTOS" 
      />
    </PageContainer>
  )
}





