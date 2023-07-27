import {theme, darkTheme, AppContainer} from './theme'
import {ThemeProvider} from '@mui/material/styles'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {ErrorPage} from './pages'
import {Root} from './Root'
import {pageRoutes} from './page-routes'
import {useState} from 'react'
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
])


function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
    <AppContainer>
    <RouterProvider router={routes} />
    <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
    {/* Move into Footer: <Switch color="default" checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
    </AppContainer>
    </ThemeProvider>
  )
}

export default App
