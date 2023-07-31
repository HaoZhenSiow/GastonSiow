import styled from 'styled-components'

import Testimonial from './Testimonial';

const TestimonialSectionStyled = createTestimonialSectionStyled()

export default function TestimonialSection(props) {
  return (
    <TestimonialSectionStyled id={props.id} className={props.className}>
      <h2>Testimonials</h2>
      <Testimonial/>
      <Testimonial/>
      <Testimonial/>
    </TestimonialSectionStyled>
  );
}

function createTestimonialSectionStyled() {
  return styled.div`
  
  `
}