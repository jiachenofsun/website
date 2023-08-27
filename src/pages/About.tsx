import {Typography, List, ListItem, Link, Box} from '@mui/material'
import {PageContainer, MotionBox} from '../theme'
import {SoundButton} from '../molecules/SoundButton'

export const About = (): JSX.Element => {
  return (
    <PageContainer>
      <Typography variant='h1'>ABOUT</Typography>
      
        <Box display="flex" alignItems="center" justifyContent="space-evenly" flexDirection={{xs: 'column', md: 'row'}}> {/* align items to center will vertically align the contents */}
          <Typography variant='body1' sx={{width: '40%'}}>
            Hello! I'm a junior in UC Berkeley studying Computer Science and Data Science. 
            Looking through my lil corner of the web will probably give you some idea of the things I'm passionate about!
          </Typography>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            >
            <img 
              src={`${process.env.PUBLIC_URL}/media/my-face.jpg`} 
              alt="My face." 
              style={{ maxHeight: '400px', borderRadius: '7%'}}
            />
          </MotionBox>
      
        </Box>
        <Box display='flex' justifyContent='center' margin='100px 0'>
          <SoundButton />
        </Box>
      <Box>
        <Typography variant='h6'>Credits:</Typography>
        <List>
          <ListItem sx={{padding: '0 10px'}}>
            <Link
              href='https://3dexport.com/free-3dmodel-retro-computer-445917.htm'
              target="_blank"
              rel="noopener noreferrer"
              sx={{color: 'inherit'}}
              >
              <Typography sx={{fontSize: '1rem !important'}}>kk7028424 for the image of a retro computer</Typography>
            </Link>
          </ListItem>
          <ListItem sx={{padding: '0 10px'}}>
            <Link
              href='https://heresy.london/'
              target="_blank"
              rel="noopener noreferrer"
              sx={{color: 'inherit'}}
              >
              <Typography sx={{fontSize: '1rem !important'}}>HERESY for inspo on shaky buttons</Typography>
            </Link>
          </ListItem>
          <ListItem sx={{padding: '0 10px'}}>
            <Link
              href='https://codepen.io/Mobius1/embed/ZNgwbr/?theme-id=modal'
              target="_blank"
              rel="noopener noreferrer"
              sx={{color: 'inherit'}}
              >
              <Typography sx={{fontSize: '1rem !important'}}>Mobius1 for the old TV and VCR effects</Typography>
            </Link>
          </ListItem>
        </List>
      </Box>
    </PageContainer>
  )
}
