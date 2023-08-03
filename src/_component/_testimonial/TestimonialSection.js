import styled from 'styled-components'

import Testimonial from './Testimonial';

const TestimonialSectionStyled = createTestimonialSectionStyled()

export default function TestimonialSection(props) {
  return (
    <TestimonialSectionStyled id={props.id} className={props.className}>
      <h2>Testimonials</h2>
      <div className="testimonials">
        <Testimonial/>
        <Testimonial/>
        <Testimonial/>
      </div>
    </TestimonialSectionStyled>
  );
}

function createTestimonialSectionStyled() {
  return styled.div`
    .testimonials {
      display: grid;
      grid-template-columns: repeat( auto-fit, minmax(400px, 1fr));
      grid-column-gap: 20px;
    }
  `
}