import {ComponentType} from 'react'
import {Home, About, Photos, Doodles, TechyStuff} from './pages'

export interface PageRoute {
  title: string
  path: string
  element: ComponentType<object>
}

export const pageRoutes: PageRoute[] = [
  {title: 'HOME', path: '/', element: Home},
  {title: 'PHOTOS', path: '/photos', element: Photos},
  {title: 'DOODLES', path: '/doodles', element: Doodles},
  {title: 'TECHY STUFF', path: '/techy-stuff', element: TechyStuff},
  {title: 'ABOUT', path: '/about', element: About},
]
