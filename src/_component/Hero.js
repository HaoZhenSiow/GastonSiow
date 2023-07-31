'use client'
import { styled } from "styled-components"
import Image from "next/image"

const HeroStyled = styled.div`
  background-color: var(--mn-bg-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 174px;
  text-align: center;

  h1 {
    font-size: var(--h1-fs);

    span {
      font-size: var(--name-fs);
      font-family: var(--sec-font);
      font-weight: 400;
    }
  }

  p {
    font-family: var(--sec-font);
    font-size: var(--hero-fs);
    letter-spacing: .25em;

    span {
      font-family: var(--pri-font);
      font-weight: 700;
      color: var(--highlight-color);
    }
  }

  img {
    margin-top: 38px;
    margin-bottom: 80px;
  }
`

export default function Hero() {
  const heroImageHeight = 550
  const heroImageWidth = heroImageHeight/450*280

  return (
    <HeroStyled id="hero">
      <h1>Hi, my name is<br/><span>GASTON SIOW</span></h1>
      <p>I turn <span>ideas</span> into <span>reality</span></p>
      <Image src="/gaston1.png" alt="Gaston Siow" width={heroImageWidth} height={heroImageHeight} priority/>
    </HeroStyled>
  )
}