import {Box, Switch, Typography} from '@mui/material'
import {theme} from '../theme'

type FooterProps = {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

export const Footer = ({ darkMode, setDarkMode }: FooterProps): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', borderTop: `1px solid ${theme.palette.primary.dark}`,  }}>
      <Switch color="default" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      <Typography variant='body1'>{darkMode ? 'BACK TO NORMALCY': "FOR THOSE WHO LIKE DARKNESS"}</Typography>
    </Box>
  )
}