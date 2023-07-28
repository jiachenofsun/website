import {Typography} from '@mui/material'
import {images} from '../utils/photo-urls'
import {Gallery} from 'react-grid-gallery'
import {PageContainer} from '../theme'

export const Photos = (): JSX.Element => {
  return (
    <PageContainer>
    <Typography variant='h1'>PHOTOS</Typography>
    <Gallery 
      images={images}
      enableImageSelection={false}
      rowHeight={570}
      margin={4}
       />
    </PageContainer>
  )
}
