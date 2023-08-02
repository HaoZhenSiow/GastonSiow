'use client'
import { styled } from "styled-components"
import Image from "next/image"

import Header from "@/_component/Header"
import Hero from "@/_component/Hero"
import About from "@/_component/About"
import PortfolioSection from "@/_component/PortfolioSection"
import TestimonialSection from "@/_component/TestimonialSection"
import ContactSection from "@/_component/ContactSection"
import Footer from "@/_component/Footer"


const MainStyle = styled.main`
  /* #intro {
    line-height: 0;

    & > * {
      line-height: normal;
    }
  } */

  .home__section, .contrast-bg {
    background-color: var(--mn-bg-color);
    padding-top: 80px;
    padding-bottom: 136px;

    h2 {
      color: var(--dark-bg-h2);
      font-family: var(--sec-font);
      margin-bottom: 54px;
    }

    h3 {
      font-family: var(--sec-font);
    }
  }

  .contrast-bg {
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

export default function Home() {
  return (
    <>
      <Header/>
      <MainStyle>
        <div id="intro">
          <Hero/>
          <About className="container contrast-bg"/>
        </div>
        <PortfolioSection 
          id="portfolio"
          className="container home__section"/>
        <TestimonialSection
          id="testimonials"
          className="container contrast-bg"/>
        <ContactSection 
          id="contact"
          className="container home__section"/>
      </MainStyle>
      <Footer/>
    </>
  )
}