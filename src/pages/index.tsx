import React from 'react'
import { Base } from 'components/templates/Base'
import Typography from '@material-ui/core/Typography'

const HomePage: React.SFC = () => (
  <Base>
    <Typography variant="h5" align="center" component="h2">
      Memos
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="textSecondary"
      component="p"
    >
      <Typography component="h3" variant="h6" color="inherit" align="center">
        <a
          href="https://gist.github.com/masahitojp/bad7db7c418b047ae67c4edf9b857f85"
          target="_blank"
          rel="noopener noreferrer"
        >
          masahitoが課金しているwebサービス
        </a>
      </Typography>
    </Typography>
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
    </>
  </Base>
)
export default HomePage
