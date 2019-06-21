import React from 'react'
import { Base } from 'components/templates/Base'

const AboutPage: React.SFC = () => (
  <Base>
    <h2>Profile</h2>
    <p>Software Engeneer, Web Developer</p>
    <h2>Links</h2>
    <ul>
      <li>
        <a
          href="https://github.com/masahitojp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
      </li>
    </ul>
  </Base>
)
export default AboutPage
