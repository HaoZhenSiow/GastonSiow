'use client'
import { styled } from "styled-components"
import { useEffect, useRef } from "react"
import Link from "next/link"

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
      window.addEventListener('scroll', onScroll)
    }

    ulElement.addEventListener('click', removeMinifiedClass)

    return () => {
      observer.disconnect()
      ulElement.removeEventListener('mouseover', removeMinifiedClass)
      ulElement.removeEventListener('mouseout', addMinifiedClass)
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
      setTimeout(() => {
        ulElement.removeEventListener('click', removeMinifiedClass)
        liItems.forEach(item => {
          item.addEventListener('click', addMinifiedClass)
        })
      }, 100)
    }

    function onScroll() {
      if (scrollY === 0) {
        ulElement.classList.remove('minified');
        if (innerWidth >= 768) {
          ulElement.removeEventListener('mouseover', removeMinifiedClass)
          ulElement.removeEventListener('mouseout', addMinifiedClass)
        }
      } else {
        ulElement.classList.add('minified');
        if (innerWidth >= 768) {
          ulElement.addEventListener('mouseover', removeMinifiedClass)
          ulElement.addEventListener('mouseout', addMinifiedClass)
        }
      }
    }
  })

  return (
    <HeaderStyled>
      <div className="container">
        <Link href="/">Gaston Siow</Link>
        <nav>
          <ul ref={ulRef}>
            <NavLink id="intro-link" to="intro">Intro <sup>01</sup></NavLink>
            <NavLink id="portfolio-link" to="portfolio">Portfolio <sup>02</sup></NavLink>
            <NavLink id="testimonials-link" to="testimonials">Testimonials <sup>03</sup></NavLink>
            <NavLink id="contact-link" to="contact">Contact <sup>04</sup></NavLink>
          </ul> 
        </nav>
      </div>
      </HeaderStyled>
  )
}

function createHeaderStyled() {
  return styled.header`
    width: 100%;
    position: fixed;
    top: 12px;
    mix-blend-mode: difference;
    z-index: 99;

    & > div {
      display: flex;
      justify-content: space-between;

      & > a {
        font-family: var(--sec-font);
        font-size: var(--logo-fs);
        font-weight: var(--logo-fw);
        cursor: pointer;
      }
    }

    ul.minified {
      @supports (selector(:has(*))) {
        &:has(#intro-link.active) { --nav-link-translateY: 0; }
        &:has(#portfolio-link.active) { --nav-link-translateY: -1.7em; }
        &:has(#testimonials-link.active) { --nav-link-translateY: -3.4em; }
        &:has(#contact-link.active) { --nav-link-translateY: -5.1em; }
      }
      height: 1.8em;
      li {
        translate: 0 var(--nav-link-translateY);
        a {
          pointer-events: none;
          -webkit-tap-highlight-color: transparent;
        }
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

      li {
        transition: translate 0.3s linear;

        &:not(&:last-child):not(&:first-child) {
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