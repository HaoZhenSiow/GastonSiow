import styled from 'styled-components'

const FooterStyled = createFooterStyled()

export default function Footer(props) {
  return (
    <FooterStyled className={props.className}>
      <p>Comuna Interiors Pte Ltd. All rights reserved.</p>
    </FooterStyled>
  );
}

function createFooterStyled() {
  return styled.footer`
    background-color: var(--mn-bg-color);
    p {
      text-align: center;
      font-size: .8em;
    }
  `
}