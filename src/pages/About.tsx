import {Typography, List, ListItem, Link} from '@mui/material'
import {PageContainer} from '../theme'
import {SoundButton} from '../molecules/SoundButton'

export const About = (): JSX.Element => {
  return (
    <PageContainer>
      <Typography variant='h1'>ABOUT</Typography>
      <Typography variant='body1'>ITS NOT READY YET</Typography>
      <Typography variant='body1'>Credits:</Typography>
      <List>
        <ListItem>
          <Link
            href='https://3dexport.com/free-3dmodel-retro-computer-445917.htm'
            target="_blank"
            rel="noopener noreferrer"
            sx={{color: 'inherit'}}
            >
            <Typography>kk7028424 for the image of a retro computer</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href='https://heresy.london/'
            target="_blank"
            rel="noopener noreferrer"
            sx={{color: 'inherit'}}
            >
            <Typography>HERESY for the shaky buttons</Typography>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href='https://codepen.io/Mobius1/embed/ZNgwbr/?theme-id=modal'
            target="_blank"
            rel="noopener noreferrer"
            sx={{color: 'inherit'}}
            >
            <Typography>Mobius1 for the old TV and VCR effects</Typography>
          </Link>
        </ListItem>
      </List>
      <SoundButton />
    </PageContainer>
  )
}
