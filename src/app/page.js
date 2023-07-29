'use client'
import { styled } from "styled-components"

import Header from "@/_component/Header"


const MainStyle = styled.main`
  div {
    height: 120vh;
    width: 100vw;
    background-color: var(--mn-bg-color);
  }

  /* div:nth-child(odd) {
    background-color: pink;
  } */
`

export default function Home() {
  return (
    <>
      <Header/>
      <MainStyle>
        <div id="intro" className="test"></div>
        <div id="portfolio" className="test"></div>
        <div id="testimonials" className="test"></div>
        <div id="contact" className="test"></div>
      </MainStyle>
    </>
  )
}