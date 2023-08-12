'use client'
import { styled } from "styled-components"

import Header from "@/_component/_header/Header"
import Hero from "@/_component/_intro/Hero"
import About from "@/_component/_intro/About"
import PortfolioSection from "@/_component/_portfolio/PortfolioSection"
import TestimonialSection from "@/_component/_testimonial/TestimonialSection"
import ContactSection from "@/_component/ContactSection"
import Footer from "@/_component/Footer"


const MainStyle = createMainStyled()

export default function Home() {
  const obj1 = { test: 'sdasd' }
  const obj2 = structuredClone(obj1)
  console.log(obj1 === obj2)
  return (
    <>
      <Header/>
      <MainStyle>
        <div id="intro">
          <Hero/>
          <About className="container home__section--contrast"/>
        </div>
        <PortfolioSection id="portfolio" className="container home__section"/>
        <TestimonialSection id="testimonials" className="container home__section--contrast"/>
        <ContactSection id="contact" className="container home__section"/>
      </MainStyle>
      <Footer/>
    </>
  )
}

function createMainStyled() {
  return styled.main`
    .home__section, .home__section--contrast {
      background-color: var(--mn-bg-color);
      padding-top: 120px;
      padding-bottom: 136px;

      h2 {
        color: var(--dark-bg-h2);
        font-family: var(--sec-font);
        margin-bottom: 72px;
      }

      h3 {
        font-family: var(--sec-font);
      }
    }

    .home__section--contrast {
      color: black;
      background-color: var(--pri-color);
      background-image: url("marble.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 50% 50%;

      h2 {
        color: var(--white-bg-h2);
      }
    }
  `
}