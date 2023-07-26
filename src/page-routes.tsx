import {ComponentType} from 'react'
import {Home, About} from './pages'

export interface PageRoute {
  title: string
  path: string
  element: ComponentType<object>
}

export const pageRoutes: PageRoute[] = [
  {title: 'Home', path: '/', element: Home},
  {title: 'Orders', path: '/about', element: About},
]
