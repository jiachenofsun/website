import {Typography, Box} from '@mui/material'
import {ArrowDownward} from '@mui/icons-material'
import {TranslucentBanner, MotionBox, PageContainer} from '../theme'
import {SectionBanner} from '../organisms/SectionBanner'

export const Home = (): JSX.Element => {
  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
      },
    }),
  }

  const bounceAnimation = {
    repeat: Infinity,
    duration: 1.3,
    ease: "easeInOut",
  }

  return (
    <PageContainer>
      <TranslucentBanner bgUrl={`${process.env.PUBLIC_URL}/media/welcome-banner.jpg`} 
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
        }}>
        <Box>
          {Array.from({ length: 8 }).map((_, i) => (
            <MotionBox
              key={i}
              variants={variants}
              initial="hidden"
              animate="show"
              custom={i}
            >
              <Typography variant="h1">Welcome</Typography>
            </MotionBox>
          ))}
        </Box>

        <MotionBox 
          initial={{ opacity: 0, x: '-3%' }} 
          animate={{ opacity: 1, x: '0%' }} 
          transition={{ delay: 2, duration: 2 }}
          sx={{maxWidth: '800px', marginLeft: {xs: '0px', md: '200px'}}}>
          <Typography variant="h4" sx={{textAlign: {xs: 'center', md: 'left'}, my: '25px'}}>
            This is a space where I'd like to share with you some cool/pretty things that I made! <br/>
          Take a look around.</Typography>
          <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                marginLeft: { xs: '20px', md: '0px' },
                marginBottom: '30px',
              }}
            >
              <Typography variant="body1">Keep scrolling</Typography>
              <MotionBox animate={{ y: ['0%', '15%', '0%'] }} transition={bounceAnimation}>
                <ArrowDownward />
              </MotionBox>
            </Box>
        </MotionBox>
      </TranslucentBanner>
      <SectionBanner 
        bgUrl={`${process.env.PUBLIC_URL}/media/tiggy.jpg`} 
        path='/photos' 
        text="PHOTOS" 
      />
    </PageContainer>
  )
}





