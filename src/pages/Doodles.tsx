import {Typography} from '@mui/material'
import {images} from '../utils/doodle-urls'
import {Gallery} from 'react-grid-gallery'
import {PageContainer, MotionBox} from '../theme'

export const Doodles = (): JSX.Element => {
  return (
    <PageContainer>
      <Typography variant='h1'>DOODLES</Typography>
      <Typography variant='body1'>I AM TRYING TO DRAW MORE :,&#93;</Typography>
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        >
      <Gallery 
        images={images}
        enableImageSelection={false}
        rowHeight={570}
        margin={4}
        />
      </MotionBox>
    </PageContainer>
  )
}
