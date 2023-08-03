import styled, { keyframes } from 'styled-components'
import Image from "next/image"
import { useEffect, useRef } from 'react';

const ProjectStyled = createProjectStyled()

export default function Project({ title, styling, housingType, imgSrc, sketchSrc }) {
  const imgRef = useRef()


  useEffect(() => {
    if (typeof window !== 'undefined' && innerWidth < 768) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    function handleScroll() {
      const scrollTop = imgRef.current.getBoundingClientRect().y
      if (scrollTop < .5*innerHeight) {
        imgRef.current.classList.add('active')
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <ProjectStyled $imgSrc={imgSrc} className="project">
      <div className="project__details">
        <p className='style'>{styling}</p>
        <p>{housingType}</p>
      </div>
      <div className="drawing">
        <Image src={sketchSrc} alt="portfolio" width={351} height={202} ref={imgRef} priority={true}/>
      </div>
      <h3>{title}</h3>
    </ProjectStyled>
  );
}

function createProjectStyled() {
  const ani = keyframes`
    from {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }
    to {
      -webkit-mask-position: 100% 0;
      mask-position: 100% 0;
    }
  `

  const ani2 = keyframes`
    from {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
    }
    to {
      -webkit-mask-position: 0 0;
      mask-position: 0 0;
    }
  `

  return styled.div.attrs(props => ({
    $imgSrc: props.$imgSrc || ''
  }))`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    .drawing {
      line-height: 0;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background: url(${props => props.$imgSrc});
        background-repeat: no-repeat;
        background-size: cover;
      }

      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
        -webkit-mask-image: url("urban-sprite.png");
        mask-image: url("urban-sprite.png");
        -webkit-mask-size: 3000% 100%;
        mask-size: 3000% 100%;
        -webkit-mask-position: .5% 0;
        mask-position: .5% 0;
      }

      img:hover, img.active {
        animation: ${ani} 1s steps(29) forwards;
      }

      @media (min-width: 768px) {
        img {
          animation: ${ani2} 1s steps(29) forwards;
        }
      }
    }

    h3 {
      font-size: var(--portfolio-h3-fs);
      font-family: var(--sec-font);
      margin-bottom: .4em;
      flex-grow: 1;
    }

    .project__details {
      display: flex;
      justify-content: space-between;
    }

    .style {
      letter-spacing: .3em;
    }
  `
}