import React from 'react'
import {AppContainer, theme} from './theme'
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
    <AppContainer>
    <RouterProvider router={routes} />
    </AppContainer>
    </ThemeProvider>
  )
}

export default App
