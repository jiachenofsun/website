import * as React from 'react'
import {Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Button} from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material'
import {StyledAppBar, theme} from '../theme'
import {pageRoutes} from '../page-routes'

const pageRoutesFiltered = pageRoutes.filter((pageRoute) => {
  return pageRoute.title !== 'Home'
})

export const NavMenu = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  };

  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'inline' },
              position: 'absolute',
              fontFamily: 'monospace',
              fontWeight: 100,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            jc's corner
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="navmenu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
            <MenuIcon fontSize='medium'/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pageRoutesFiltered.map((pageRoute) => (
                <MenuItem key={pageRoute.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{pageRoute.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 100,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            jc's corner
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}}>
            {pageRoutesFiltered.map((pageRoute) => (
              <Button
                key={pageRoute.title}
                onClick={handleCloseNavMenu}
                sx={{
                  display: 'block',
                  py: 0,
                  mx: 1,
                  color: theme.palette.secondary.main}}
              >
                {pageRoute.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}
