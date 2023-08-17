'use client'
import { styled } from "styled-components"
import Image from "next/image"
import fluid from "fluid-jss"

const HeroStyled = createHeroStyled()

export default function Hero() {
  return (
    <HeroStyled className="container">
      <div>
        <h1>Hi, my name is<br/><span>GASTON SIOW</span></h1>
        <p>I turn <span>ideas</span> into <span>reality</span></p>
      </div>
      {/* <Image src="/hero.webp" alt="Gaston Siow" width={855} height={1334} priority={true}/> */}
      <img src="/hero.webp" alt="Gaston Siow" />
    </HeroStyled>
  )
}

function createHeroStyled() {
  return styled.div`
    background-color: var(--mn-bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 174px;
    text-align: center;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      padding-top: 0px;
      text-align: left;
    }

    h1 {
      font-size: var(--h1-fs);
      font-weight: 400;

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
      /* margin-top: 38px; */
      /* margin-bottom: 80px; */
      width: 80vw;
      height: auto;
      flex-shrink: 0;

      @media (min-width: 768px) {
        width: ${fluid(320, 520, 768, 1440)}
      }
    }
    
  `
}