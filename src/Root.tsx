import {Box} from '@mui/material'
import {Outlet} from 'react-router-dom'
import {NavMenu} from './organisms/NavMenu'

export const Root = (): JSX.Element => {
  
  return (
    <Box sx={{padding: '0', margin: '0'}}>
      <NavMenu />
      {/* TODO: ADD TICKER */}
      <Outlet />
    </Box>
  )
}
