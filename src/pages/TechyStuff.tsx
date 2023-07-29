import {Card, CardContent, Box, Typography} from '@mui/material'
import {PageContainer} from '../theme'

export const TechyStuff = (): JSX.Element => {
  return (
    <PageContainer>
      <Typography variant='h1'>TECHY STUFF</Typography>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Card 
          sx={{
            width: {xs: '350px', md: '600px'},
            padding: '30px',
            }}>
          <CardContent>
            <Typography variant='h2'>PASSING</Typography>
            <Typography variant='body1'>A 2D narrative driven, open-world game made in Unity.</Typography>
            <iframe
              title="Passing"
              width="100%"
              height="167"
              src="https://itch.io/embed/1494203"
              >
              <a href="https://glumfrog.itch.io/passing">Passing by glumfrog</a>
            </iframe>
          </CardContent>
        </Card>
      </Box>
    </PageContainer>
  )
}
