import {theme, darkTheme, AppContainer} from './theme'
import {ThemeProvider} from '@mui/material/styles'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {ErrorPage} from './pages'
import {Root} from './Root'
import {pageRoutes} from './page-routes'
import {useState, useEffect} from 'react'
import {Footer} from './organisms/Footer'

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
],  {
  basename: process.env.PUBLIC_URL,
})


function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const darkModeSetting = window.localStorage.getItem('darkMode')
    if (darkModeSetting) {
      const isDarkMode = darkModeSetting === 'true'
      setDarkMode(isDarkMode)
    }
  }, [])

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
    <AppContainer>
    <RouterProvider router={routes} />
    <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
    </AppContainer>
    </ThemeProvider>
  )
}

export default App
