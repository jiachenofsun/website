import React from 'react'
import {theme} from './theme'
import {Container} from '@mui/material'
import {ThemeProvider} from '@mui/material/styles'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {ErrorPage} from './pages'
import {Root} from './Root'
import {pageRoutes} from './page-routes'

 const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: pageRoutes.map((pageRoute) => {
      return {
        path: pageRoute.path,
        element: <pageRoute.element />,
      }
    }),
  },
])

function App() {
  return (

    <ThemeProvider theme={theme}>
    <Container>
    <RouterProvider router={routes} />
    </Container>
    </ThemeProvider>
  )
}

export default App
