import React from 'react'
import { Base } from 'components/templates/Base'
import Typography from '@material-ui/core/Typography'
import { FormattedMessage } from 'react-intl'

const HomePage: React.SFC = () => (
  <Base>
    <Typography component="h2" variant="h5" color="inherit" align="center">
      Software
    </Typography>
    <>
      <Typography component="h3" variant="h6" color="inherit" align="center">
        <a
          href="https://github.com/masahitojp/botan-core"
          target="_blank"
          rel="noopener noreferrer"
        >
          botan
        </a>
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        tiny chat bot framework for Java SE 8.(like a Hubot)
      </Typography>
      <FormattedMessage id="hello" />
    </>
  </Base>
)
export default HomePage
