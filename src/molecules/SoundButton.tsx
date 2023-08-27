import {Typography, Box, Link} from '@mui/material'
import {ShakyButton} from '../theme'

export const SoundButton = (): JSX.Element => {
  const NUM_BARS = 40

  const HEIGHT_ARRAY = [18, 24, 15, 18, 15, 24, 16, 14, 15, 12, 19, 10, 
    11, 12, 14, 20, 10, 13, 11, 16, 10, 15, 10, 17, 24, 12, 21, 10, 16, 
    10, 16, 14, 23, 14, 23, 19, 18, 11, 16, 15]

  return (
  <Link 
    href="https://music.apple.com/us/playlist/tune/pl.u-MDAWkl3F4ovd8D" 
    target="_blank" 
    rel="noopener noreferrer"
    underline="none"
    color="inherit"
    sx={{display: 'inline-block'}}
  >
  <ShakyButton
    sx={{
      display: 'flex',
      flexDirection: 'column',
      border: '0.25rem solid',
      borderRadius: 0,
      px: '25px',
      '&:hover': {
      },
      '&:hover div': {
        animation: 'sound 500ms linear infinite alternate',
      },
      '@keyframes sound': {
        '0%': {
          opacity: 0.5,
        },
        '100%': {
          opacity: 1,
          height: '28px',
        },
      },
    }}
  >
    <Typography sx={{ fontSize: {xs: '1.2rem !important', md: '2rem !important'}}}>
      MUSIC I &lt;3
    </Typography>
    <Box sx={{display: 'flex', alignItems: 'center'}}>
    {Array.from({ length: NUM_BARS }, (_, i) => 
    <div key={i} style={{
      width: '2px',
      marginRight: '2.5px',
      height: `${HEIGHT_ARRAY[i]}px`,
      backgroundColor: '#F64E61',
      animationDuration: `${Math.floor(Math.random() * 150 + 250)}ms`,
    }}></div>
    )}
    </Box>
    

  </ShakyButton>
  </Link>
  )
  }