import styled from 'styled-components'
import Image from "next/image"

const TestimonialStyled = createTestimonialStyled()

export default function Testimonial(props) {
  return (
    <TestimonialStyled className={props.className}>
      <p className="quote">"Really love the outcome of the renovation!"</p>
      <Image src="/review.jpg" alt="portfolio" width={351} height={193} priority={true}></Image>
      <p>Did not regret engaging Hamid & Sons Interior Design for our home reno. Big shout out to our ID Muhammad from Marsiling Branch! You can really put your trust...</p>
    </TestimonialStyled>
  );
}

function createTestimonialStyled() {
  return styled.div`
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
    .quote {
      font-family: var(--pri-font);
      font-size: 1.2em;
      font-weight: bold;
      line-height: 1.1em;
      margin-bottom: 8px;
    }

    p:not(.quote) {
      letter-spacing: .2em;
      font-size: .8em;
    }
    
    img {
      width: 100%;
      border-radius: 5px;
      height: auto;
    }
  `
}