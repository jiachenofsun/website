import {createTheme} from '@mui/material/styles'
import {Container} from '@mui/material'
import styled from '@emotion/styled'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

export const AppContainer = styled(Container)(() => ({
  margin: '0px',
  maxWidth: 'none'
}))