import * as React from 'react'

import { Container } from 'components/parts/Container'
import { Content } from 'components/parts/Content'
import { Header, Nav, NavItem } from 'components/parts/Header'

interface Props {
  children: React.ReactNode
}

export const Base: React.SFC<Props> = ({ children }: Props) => (
  <Container>
    <Header>
      <Nav>
        <NavItem href="/">HOME</NavItem>
        <NavItem href="/about">ABOUT</NavItem>
      </Nav>
    </Header>
    <Content>{children}</Content>
  </Container>
)
