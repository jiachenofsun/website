
import {PageContainer} from '../theme'
import {SectionBanner} from '../organisms/SectionBanner'
import {VHSBanner} from '../organisms/VHSBanner'
import {TechyBanner} from '../organisms/TechyBanner'

export const Home = (): JSX.Element => {
  return (
    <PageContainer>
      <VHSBanner />
      <SectionBanner 
        bgUrl={`${process.env.PUBLIC_URL}/media/photos-banner.jpg`} 
        path='/photos' 
        text="PHOTOS" 
      />
      <SectionBanner 
        bgUrl={`${process.env.PUBLIC_URL}/media/doodles-banner.jpg`} 
        path='/doodles' 
        text="DOODLES" 
      />
      <TechyBanner />
      <SectionBanner 
        bgUrl={`${process.env.PUBLIC_URL}/media/about-banner.jpg`} 
        path='/about' 
        text="ABOUT" 
      />
    </PageContainer>
  )
}





