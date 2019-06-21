import * as React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

interface Props {
  children?: React.ReactNode
  className?: string
  href: string
}

const A = styled(Link)`
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2em;
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  padding: 1em;
  color: white;
`

const NavItem: React.StatelessComponent<Props> = ({
  children,
  className,
  href,
}: Props) => (
  <li className={className}>
    <A to={href}>{children}</A>
  </li>
)

export default styled(NavItem)`
  display: inline-flex;
  margin-right: 0.625em;
`
