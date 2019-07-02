import React from 'react'
import { Base } from 'components/templates/Base'
import Typography from '@material-ui/core/Typography'

const AboutPage: React.SFC = () => (
  <Base>
    <Typography variant="h6" align="center" component="h2">
      Profile
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      Software Engeneer, Web Developer
    </Typography>
    <Typography variant="h6" align="center" component="h2">
      Links
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      <a
        href="https://github.com/masahitojp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        github{' '}
      </a>{' '}
    </Typography>
  </Base>
)
export default AboutPage
