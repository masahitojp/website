import React from 'react'
import { Base } from 'components/templates/Base'
import { Title } from 'components/parts/Content'

const HomePage: React.SFC = () => (
  <Base>
    <Title>masahito.me</Title>
    <h2>Software</h2>
    <>
      <h4>
        <a
          href="https://github.com/masahitojp/botan-core"
          target="_blank"
          rel="noopener noreferrer"
        >
          botan
        </a>
      </h4>
      <p>tiny chat bot framework for Java SE 8.(like a Hubot)</p>
    </>
  </Base>
)
export default HomePage
