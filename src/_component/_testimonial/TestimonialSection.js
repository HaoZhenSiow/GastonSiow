import styled from 'styled-components'
import Image from 'next/image';

import Testimonial from './Testimonial';

const TestimonialSectionStyled = createTestimonialSectionStyled()

export default function TestimonialSection(props) {
  return (
    <TestimonialSectionStyled id={props.id} className={props.className}>
      <h2>Testimonials</h2>
      <div className="testimonials">
        <div>
          <Image src={"/testimonials/testimonial1.jpeg"} alt="Review from Vijay" width={473} height={1024} priority={true}/>
        </div>
        <div>
          <Image src={"/testimonials/testimonial2.jpeg"} alt="Review from Kelvin" width={473} height={1024} priority={true}/>
        </div>
        {/* <Testimonial/>
        <Testimonial/>
        <Testimonial/> */}
      </div>
    </TestimonialSectionStyled>
  );
}

function createTestimonialSectionStyled() {
  return styled.div`
    .testimonials {
      display: grid;
      grid-column-gap: 20px;

      @media (min-width: 768px) {
        grid-template-columns: repeat( auto-fit, minmax(300px, 1fr));
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  `
}