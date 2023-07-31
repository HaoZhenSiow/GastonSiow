import styled from 'styled-components'
import Image from "next/image"
import { useEffect, useRef } from 'react';

const ProjectStyled = createProjectStyled()

export default function Project(props) {
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
    <ProjectStyled className={props.className}>
        <div>
          <div className="project">
            <h3>641A Senja Close</h3>
            <div className="drawing">
              <Image src="/portfolio.jpg" alt="portfolio" width={351} height={202} ref={imgRef}/>
            </div>
            <div className="project__details">
              <p className='style'>Modern Lux</p>
              <p>3 Room BTO</p>
            </div>
          </div>
        </div>
    </ProjectStyled>
  );
}

function createProjectStyled() {
  return styled.div`
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
        background: url("portfolio.png");
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
        /* animation: ani2 0.7s steps(29) forwards; */
      }

      img:hover, img.active {
        animation: ani 0.7s steps(29) forwards;
      }

      @media (min-width: 768px) {
        img {
          animation: ani2 0.7s steps(29) forwards;
        }
      }
    }

    h3 {
      font-size: var(--project-h3-fs);
      font-family: var(--sec-font);
      margin-bottom: .4em;
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