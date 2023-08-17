import styled from 'styled-components'
import Image from 'next/image';

const AboutStyled = createAboutStyled()

export default function About(props) {
  return (
    <AboutStyled className={props.className}>
      <h2>About Me</h2>
      <h3>Designing with Passion for Problem Solving</h3>
      <p>With 3 years of expertise in crafting exclusive interior spaces for residential projects, from BTO units and resale HDBs to Executive maisonettes and new/resale condos, I create personalized havens tailored to your lifestyle and habits.</p>
      <p>I truly believe that no where else in the world would recharge a person in emotionally and physically other than a lovely home that we are yearning for from the bottom of our heart together with our love one. Let us turn your house into an emotionally and physically recharging home, cherished by you and your loved ones. Contact me now to bring your dream home to life!</p>
      <h3>Skills & Certifications</h3>
      <ul>
        <li>Building Service (Mechanical)</li>
        <li>Building Service (Electrical)</li>
        <li>Laminate Course</li>
        <li>Flooring Course</li>
        <li>Worktop Course</li>
        <li>Carpentry Course</li>
        <li>Manage Work at High</li>
        <li>Workplace Safety and Health Management</li>
        <li>Autocad 2D/3D</li>
        <li>2D Drawings</li>
        <li>Adobe Illustrator</li>
      </ul>
      <Image src="/cert.jpg" alt="Renovation for Public Housing Certification" width={1024} height={852} priority={true}></Image>
    </AboutStyled>
  );
}

function createAboutStyled() {
  return styled.div`
    h3 {
      font-family: var(--sec-font);
      font-size: var(--section-h3-fs);
      margin-bottom: .5em;
    }

    h3:nth-child(5) {
      margin-top: 1em;
    }

    p {
      margin-block: 1em;
    }

    ul {
      column-count: 2;
      margin-bottom: 28px;
    }

    img {
      width: 100%;
      height: auto;
      border-bottom: black solid 4px;
      scale: .8;

      @media (min-width: 768px) {
        width: clamp(20.31rem, calc(18.17rem + 4.46vw), 22.19rem); /* 325px to 355px, 768px, 1440px */
        scale: 1;
      }
    }
  `
}