import {Typography} from '@mui/material'
import {ImageGrid} from '../theme'
import {photoUrls} from '../utils/photo-urls'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const Photos = (): JSX.Element => {
  return (
    <>
    <Typography variant='h1'>Photos</Typography>
    <ImageGrid>
      {photoUrls.map((src, index) => (
        <LazyLoadImage
          key={index}
          height='100%'
          width='100%'
          src={src} />
      ))}
    </ImageGrid>
    </>
  )
}
