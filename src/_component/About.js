import styled from 'styled-components'

const AboutStyled = createAboutStyled()

export default function About(props) {
  return (
    <AboutStyled className={props.className}>
      <h2>About Me</h2>
      <h3>Designing with Passion for Problem Solving</h3>
      <p>I’ve always been passionate about pixels and design projects and haven’t stopped working and learning about new technologies . Other than sitting in from of my display I enjoy myself in casual sports, such as bowling or playing football with friends.</p>
      <p>I'm grateful that my job allows me to work from anywhere. I’m active on Instagram where I share most of the and all info about my upcoming projects.</p>
      <p>I also like sharing my experiences on Instagram</p>
      <h3>Certification</h3>
      <ul>
        <li>certification</li>
        <li>certification</li>
        <li>certification</li>
        <li>certification</li>
        <li>certification</li>
      </ul>
    </AboutStyled>
  );
}

function createAboutStyled() {
  return styled.div`
    h3 {
      font-family: var(--sec-font);
      font-size: 32px;
      text-align: center;
      font-weight: 400;
      margin-bottom: 28px;
    }

    p {
      text-align: center;
      text-wrap: balance;
      margin-block: 1em;
    }

    ul {
      column-count: 2;
    }
  `
}