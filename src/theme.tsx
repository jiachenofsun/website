import {createTheme} from '@mui/material/styles'
import {AppBar} from '@mui/material'
import styled from '@emotion/styled'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000000',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: 'none !important',
          margin: '0px',
        },
      },
    },
  },
})

export const StyledAppBar = styled(AppBar)(() => ({
  borderBottom: `1px solid ${theme.palette.primary.dark}`,
}))