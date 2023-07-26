import {Box} from '@mui/material'
import {Outlet} from 'react-router-dom'

export const Root = (): JSX.Element => {
  
  return (
    <Box>
      {/* TODO: ADD TOP BANNER/LOGO */}
      {/* TODO: ADD TOP MENU */}
      {/* TODO: ADD TICKER */}
      <Outlet />
    </Box>
  )
}
