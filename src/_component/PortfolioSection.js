import styled from 'styled-components'
import projects from '@/_utils/projects';

import Project from './Project';

const PortfolioSectionStyled = createPortfolioSectionStyled()

export default function PortfolioSection(props) {
  return (
    <PortfolioSectionStyled id={props.id} className={props.className}>
      <h2>Portfolio</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </PortfolioSectionStyled>
  );
}

function createPortfolioSectionStyled() {
  return styled.div``
}