'use client'
import { styled } from "styled-components"
import { Link } from "react-scroll"
import { useEffect } from "react"

const HeaderStyled = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  margin-top: 12px;
  mix-blend-mode: difference;
  z-index: 99;

  & > div {
    display: flex;
    justify-content: space-between;

    & > a {
      font-family: var(--sec-font);
      font-size: var(--logo-fs);
      font-weight: var(--logo-fw);
    }
  }


  ul {
    list-style-type: none;
    padding-block: .4em;
    text-align: end;
    width: 10em;
    height: 6.8em;
    overflow: hidden;
    transition: height .3s linear;

    &.minified {
      height: 1.8em;

      li {
        translate: 0 var(--nav-link-translateY);

        a {
          pointer-events: none;
        }
        
      }
    }

    @supports (selector(:has(*))) {
      &:has(#intro-link.active) { --nav-link-translateY: 0; }
      &:has(#portfolio-link.active) { --nav-link-translateY: -1.7em; }
      &:has(#testimonials-link.active) { --nav-link-translateY: -3.4em; }
      &:has(#contact-link.active) { --nav-link-translateY: -5.1em; }
    }

    li {
      transition: translate 0.3s linear;

      &:not(&:last-child):not(&:first-child) {
        margin-block: .5em;
      }

      a { 
        position: relative;
        pointer-events: auto;
      }

      a.active::before {
        content: '';
        display: block;
        width: 12px;
        height: 2px;
        background-color: var(--pri-color);
        position: absolute;
        top: 50%;
        left: -20px;
      }

      sup { font-size: .7em; }
    }
  }
`

export default function Header() {
  useEffect(() => {  
    const ulElement = document.querySelector('nav > ul'),
          liItems = ulElement.querySelectorAll('li'),
          observer = new MutationObserver(onClassToggleCallback)

    if (!CSS.supports('selector(html:has(body))')) {
      observer.observe(ulElement, { childList: true, attributes: true, subtree: true })
    }

    ulElement.addEventListener('click', removeMinifiedClass)

    return () => {
      observer.disconnect()
      ulElement.removeEventListener('click', removeMinifiedClass)
      liItems.forEach(item => {
        item.removeEventListener('click', addMinifiedClass)
      })
    }

    function addMinifiedClass() {
      ulElement.classList.add('minified')
      setTimeout(() => {
        ulElement.addEventListener('click', removeMinifiedClass)
        liItems.forEach(item => {
          item.removeEventListener('click', addMinifiedClass)
        })
      }, 100)
      
    }

    function removeMinifiedClass() {
      ulElement.classList.remove('minified')
      ulElement.removeEventListener('click', removeMinifiedClass)
      liItems.forEach(item => {
        item.addEventListener('click', addMinifiedClass)
      })
    }
  })

  return (
    <HeaderStyled>
      <div className="container">
        <Link to="intro" spy={true} smooth={true} offset={0} duration={0}>Gaston Siow</Link>
        <nav>
          <ul className="minified">
            <li><Link id="intro-link" to="intro" spy={true} smooth={true} offset={0} duration={0}>Intro <sup>01</sup></Link></li>
            <li><Link id="portfolio-link" to="portfolio" spy={true} smooth={true} offset={0} duration={0}>Portfolio <sup>02</sup></Link></li>
            <li><Link id="testimonials-link" to="testimonials" spy={true} smooth={true} offset={0} duration={0}>Testimonials <sup>03</sup></Link></li>
            <li><Link id="contact-link" to="contact" spy={true} smooth={true} offset={0} duration={0}>Contact <sup>04</sup></Link></li>
          </ul> 
        </nav>
      </div>
      </HeaderStyled>
  )
}

function onClassToggleCallback(mutationsList) {
  mutationsList.forEach(mutation => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
      const anchorElement = mutation.target,
            listItem = anchorElement.parentNode,
            ulElement = listItem.parentNode,
            index = Array.from(ulElement.children).indexOf(listItem),
            positionY = -1.7 * index + 'em'
      if (anchorElement.classList.contains('active')) {
        ulElement.style.setProperty('--nav-link-translateY', positionY)
      }
    }
  });
}