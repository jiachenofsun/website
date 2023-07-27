import {ComponentType} from 'react'
import {Home, About, Photos, Doodles, TechyStuff} from './pages'

export interface PageRoute {
  title: string
  path: string
  element: ComponentType<object>
}

export const pageRoutes: PageRoute[] = [
  {title: 'Home', path: '/', element: Home},
  {title: 'Photos', path: '/photos', element: Photos},
  {title: 'Doodles', path: '/doodles', element: Doodles},
  {title: 'Techy Stuff', path: '/techy-stuff', element: TechyStuff},
  {title: 'About', path: '/about', element: About},
]
