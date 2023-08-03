import styled from 'styled-components'
import projects from '@/_data/projects';

import Project from './Project';

const PortfolioSectionStyled = createPortfolioSectionStyled()

export default function PortfolioSection(props) {
  return (
    <PortfolioSectionStyled id={props.id} className={props.className}>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </PortfolioSectionStyled>
  );
}

function createPortfolioSectionStyled() {
  return styled.div`
    .projects {
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(400px, 1fr));
      grid-column-gap: 20px;
    }
  `
}