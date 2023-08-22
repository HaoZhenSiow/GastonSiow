'use client'
import { styled } from "styled-components"
import Image from "next/image"
import fluid from "fluid-jss"

const HeroStyled = createHeroStyled()

export default function Hero() {
  return (
    <HeroStyled className="container">
      <div>
        <h1 className="animate__animated animate__fadeInLeft">Hi, my name is<br/><span>GASTON SIOW</span></h1>
        <p className="animate__animated animate__fadeInUp">I turn <span>ideas</span> into <span>reality</span></p>
      </div>
      <Image className="animate__animated animate__fadeInRight" src="/hero.webp" alt="Gaston Siow" width={1066} height={1600} priority={true}/>
      {/* <img src="/hero.webp" alt="Gaston Siow"/> */}
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

    p.animate__fadeInUp {
      animation-delay: .75s
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