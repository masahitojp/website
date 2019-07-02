import * as React from 'react'

import { MemoryRouter as Router } from 'react-router'
import { Link, LinkProps } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

// eslint-disable-next-line react/display-name
const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link innerRef={ref as any} {...props} />,
)
export const Header: React.SFC = () => {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            masahito.me
          </Typography>
          <Router>
            <Button component={AdapterLink} to="/">
              home
            </Button>
            <Link
              to="/about"
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              about
            </Link>
          </Router>
        </Toolbar>
      </AppBar>
    </div>
  )
}
