import {motion} from 'framer-motion'
import {Typography, Container, Box} from '@mui/material'
import {ArrowDownward} from '@mui/icons-material';

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

  const FadeInBox = motion(Box)

  //TODO: MAKE RESPONSIVE
  return (
    <Container 
    sx={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url("${process.env.PUBLIC_URL}/media/welcome-banner.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: 0.35,
      },
      '& > *': {
        position: 'relative',
        zIndex: 1,
      },
    }}>
      <Box>
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          variants={variants}
          initial="hidden"
          animate="show"
          custom={i}
        >
          <Typography variant="h1">Welcome</Typography>
        </motion.div>
      ))}
      </Box>
      <FadeInBox 
        initial={{ opacity: 0, x: '-3%' }} 
        animate={{ opacity: 1, x: '0%' }} 
        transition={{ delay: 2.5, duration: 2 }}
        sx={{maxWidth: '800px', marginLeft: '200px'}}>
        <Typography variant="h4">This is a space where I'd like to share some cool/pretty things I made with you! <br/>
         Take a look around.</Typography>
        <Box>
          <Typography variant="body1">Scroll down to see more stuff</Typography>
          <motion.div animate={{ y: ["0%", "15%", "0%"] }} transition={bounceAnimation}>
            <ArrowDownward />
          </motion.div>
        </Box>
      </FadeInBox>
    </Container>
  )
}





