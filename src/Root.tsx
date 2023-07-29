import {Box} from '@mui/material'
import {Outlet, useLocation, ScrollRestoration} from 'react-router-dom'
import {NavMenu} from './organisms/NavMenu'
import {useLayoutEffect} from 'react'

export const Root = (): JSX.Element => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
     window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Box sx={{padding: '0', margin: '0'}}>
      <NavMenu />
      <Outlet />
      <ScrollRestoration />
    </Box>
  )
}
