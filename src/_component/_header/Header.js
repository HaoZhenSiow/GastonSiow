'use client'
import { useEffect, useRef } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { styled } from "styled-components"
import Link from "next/link"
import Bowser from "bowser"

import NavLink from "./NavLink"

const HeaderStyled = createHeaderStyled()

export default function Header() {
  const ulRef = useRef()
  
  useEffect(() => {  
    const ulElement = ulRef.current,
          liItems = ulElement.querySelectorAll('li'),
          observer = new MutationObserver(onClassToggleCallback)

    if (!CSS.supports('selector(html:has(body))')) {
      observer.observe(ulElement, { childList: true, attributes: true, subtree: true })
    }

    if (typeof window !== 'undefined') {
      const userAgent = Bowser.getParser(window.navigator.userAgent),
            deviceType = userAgent.getPlatform().type

      window.addEventListener('scroll', onScroll)

      if (deviceType === 'desktop') {
        ulElement.addEventListener('mouseover', removeMinifiedClass)
        ulElement.addEventListener('mouseout', addMinifiedClass)
      } else {
        ulElement.addEventListener('click', removeMinifiedClass)
      }
    }

    return () => {
      observer.disconnect()
      ulElement.removeEventListener('click', removeMinifiedClass)
      ulElement.removeEventListener('mouseover', removeMinifiedClass)
      ulElement.removeEventListener('mouseout', addMinifiedClass)
      liItems.forEach(item => {
        item.removeEventListener('click', handleNavClick)
      })
    }
  })

  return (
    <>
      <HeaderStyled className="container">
        <Link href="/" id="logo">Gaston</Link>
        <nav>
          <ul ref={ulRef}>
            <NavLink id="intro-link" to="intro">Intro<sup>01</sup></NavLink>
            <NavLink id="portfolio-link" to="portfolio">Portfolio<sup>02</sup></NavLink>
            <NavLink id="testimonials-link" to="testimonials">Testimonials<sup>03</sup></NavLink>
            <NavLink id="contact-link" to="contact">Contact<sup>04</sup></NavLink>
          </ul> 
        </nav>
        <Link href="https://api.whatsapp.com/send?phone=6582682952" id="whatsapp-link"><FaWhatsapp/>Whatsapp</Link>
        
      </HeaderStyled>
    </>
  )
}

function createHeaderStyled() {
  return styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 12px;
    z-index: 99;
    mix-blend-mode: difference;

    #logo {
      align-self: flex-start;
      font-family: var(--sec-font);
      font-size: var(--logo-fs);
      font-weight: 700;
      cursor: pointer;

      @media (min-width: 1500px) {
        translate: -120%;
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

      li { transition: translate 0.3s linear; }

      li:not(li:last-child):not(li:first-child) {
        margin-block: .5em;
      }

      a { 
        position: relative;
        cursor: pointer;
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

      @media (min-width: 1500px) {
        translate: 150px;
      }
    }

    ul.minified {
      @media (max-width: 1499px) {
        height: 1.8em;
      
        @supports (selector(:has(*))) {
          &:has(#intro-link.active) { --nav-link-translateY: 0; }
          &:has(#portfolio-link.active) { --nav-link-translateY: -1.7em; }
          &:has(#testimonials-link.active) { --nav-link-translateY: -3.4em; }
          &:has(#contact-link.active) { --nav-link-translateY: -5.1em; }
        }

        li {
          translate: 0 var(--nav-link-translateY);
          pointer-events: none;
          a {
            -webkit-tap-highlight-color: transparent;
          }
        }
      }
    }

    #whatsapp-link {
      position: fixed;
      right: var(--paddingX);
      bottom: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 400;

      @media (min-width: 1500px) {
        translate: 150px;
      }
      
      svg {
        font-size: 3em;
      }
    }
  `
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
  })
}

function addMinifiedClass() {
  const liItems = this.querySelectorAll('li')

  this.classList.add('minified')

  setTimeout(() => {
    this.addEventListener('click', removeMinifiedClass)
    liItems.forEach(item => {
      item.removeEventListener('click', handleNavClick)
    })

  }, 100)
}

function removeMinifiedClass() {
  const liItems = this.querySelectorAll('li')
  
  this.classList.remove('minified')

  setTimeout(() => {
    this.removeEventListener('click', removeMinifiedClass)
    liItems.forEach(item => {
      item.addEventListener('click', handleNavClick)
    })

  }, 100)
}

function handleNavClick() {
  const ulElement = this.parentNode,
        liItems = ulElement.querySelectorAll('li')

  ulElement.classList.add('minified')

  setTimeout(() => {
    ulElement.addEventListener('click', removeMinifiedClass)
    liItems.forEach(item => {
      item.removeEventListener('click', handleNavClick)
    })

  }, 100)
}

function onScroll() {
  const ulElement = document.querySelector('nav > ul')

  if (scrollY === 0) {
    ulElement.classList.remove('minified');
    // if (innerWidth >= 768) {
    //   ulElement.removeEventListener('mouseover', removeMinifiedClass)
    //   ulElement.removeEventListener('mouseout', addMinifiedClass)
    // }
  } else {
    ulElement.classList.add('minified');
    // if (innerWidth >= 768) {
    //   ulElement.addEventListener('mouseover', removeMinifiedClass)
    //   ulElement.addEventListener('mouseout', addMinifiedClass)
    // }
  }
}