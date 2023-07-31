import styled from 'styled-components'
import Project from './Project';

const PortfolioSectionStyled = createPortfolioSectionStyled()

export default function PortfolioSection(props) {
  return (
    <PortfolioSectionStyled id={props.id} className={props.className}>
      <h2>Portfolio</h2>
      <Project/>
      <Project/>
      <Project/>
      
    </PortfolioSectionStyled>
  );
}

function createPortfolioSectionStyled() {
  return styled.div``
}