import styled from 'styled-components'
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi'
import Link from 'next/link';

const FooterStyled = createFooterStyled()

export default function Footer(props) {
  return (
    <FooterStyled className='container'>
      <div className='socialMedia'>
        <Link href="https://www.facebook.com/Comuna.Interiors" target='_blank'>
          <BiLogoFacebook className='socialMediaIcon'/>
        </Link>
        <Link href="https://www.instagram.com/comuna.interiors/" target='_blank'>
          <BiLogoInstagram className='socialMediaIcon'/>
        </Link>
      </div>
      <p>Comuna Interiors Pte Ltd. All rights reserved.</p>
    </FooterStyled>
  );
}

function createFooterStyled() {
  return styled.footer`
    background-color: var(--mn-bg-color);
    padding-bottom: 0.5em;

    .socialMedia {
      display: flex;
      justify-content: center;

      .socialMediaIcon {
        font-size: 2em;
      }
    }

    p {
      text-align: center;
      font-size: .8em;
    }
  `
}