import * as React from 'react'
import {Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container} from '@mui/material'
import {Menu as MenuIcon} from '@mui/icons-material'
import {theme, StyledAppBar, ShakyButton, MotionBox} from '../theme'
import {pageRoutes} from '../page-routes'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

const pageRoutesFiltered = pageRoutes.filter((pageRoute) => {
  return pageRoute.title !== 'HOME'
})

export const NavMenu = (): JSX.Element => {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const tickerVariants = {
    animate: {
      x: ['100%', '-100%'],
      transition: {
        x: {
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }
      }
    }
  }

  return (
    <StyledAppBar position='sticky' elevation={0}>
      <Container sx={{borderBottom: `1px solid ${theme.palette.primary.dark}`}}>
        <Toolbar disableGutters>
          {/* LARGER SCREEN SIZES */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to=""
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

          {/* SMALLER SCREEN SIZES */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, position: 'absolute'}}>
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
                  <Typography 
                    textAlign="center" 
                    component={Link} 
                    to={pageRoute.path}
                    sx={{textDecoration: 'none'}}
                    >{pageRoute.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* SMALLER SCREEN SIZES */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to=""
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
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
          
          {/* LARGER SCREEN SIZES */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}}>
            {pageRoutesFiltered.map((pageRoute) => (
              <ShakyButton
                key={pageRoute.title}
                onClick={() => navigate(pageRoute.path)}
                sx={{
                  display: 'block',
                  py: 0,
                  mx: 1,
                  color: 'inherit'}}
              >
                {pageRoute.title}
              </ShakyButton>
            ))}
          </Box>
        </Toolbar>
      </Container>
      <MotionBox
        variants={tickerVariants}
        initial="animate"
        animate="animate"
      >
        <Typography variant='body1' sx={{display: 'inline', fontSize: { xs: '0.7rem', md: '1rem' }}}>REMEMBER TO STAY HYDRATED. HAVE A WONDERFUL DAY.</Typography>
      </MotionBox>
    </StyledAppBar>
    
  )
}
