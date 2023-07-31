import styled from 'styled-components'
import { useState, useRef } from 'react'
import submitForm from '@/_actions/submitForm'

const ContactSectionStyled = createContactSectionStyled()

export default function ContactSection(props) {
  const [isSending, setIsSending] = useState(false)
  const formRef = useRef()

  async function handleSubmit(formData) {
    setIsSending(true)
    if (/^\d{8}$/.test(formData.get('phone')) === false) {
      alert('Please enter a valid phone number')
      setIsSending(false)
      return
    }
    const { status } = await submitForm(formData)
    if ( status === 200 ) {
      formRef.current.reset()
      alert('Thanks for your message! We will get back to you soon.')
    } else {
      alert('Something went wrong, please try again.')
    }
    setIsSending(false)
  }

  return (
    <ContactSectionStyled id={props.id} className={props.className}>
      <h2>Get In Touch</h2>
      <address>
        <p>Blk 126 Bukit Merah Lan 1</p>
        <p>#01-214</p>
        <p>Singapore 150126</p>
        <p>1234 5678</p>
        <p>hk.siow@comuna.comg.sg</p>
      </address>
      <form ref={formRef} action={handleSubmit} method='POST'>
        <label htmlFor="name">Name <span>(required)</span></label>
        <input type="text" name="name" id="name" required/>
        <label htmlFor="phone">Phone <span>(required)</span></label>
        <input type="number" name="phone" id="phone" required/>
        <label htmlFor="email">Email <span>(required)</span></label>
        <input type="email" name="email" id="email" required/>
        <label htmlFor="type">Housing Type <span>(required)</span></label>
        <select name="type" id="type" required>
          <option value="BTO">BTO</option>
          <option value="HDB">HDB</option>
          <option value="Condo">Condo</option>
        </select>
        <label htmlFor="collection">Key Collection Date <span>(required)</span></label>
        <input type="date" name="collection" id="collection" required/>
        <label htmlFor="message">Message <span>(if applicable)</span></label>
        <textarea name="message" id="message" rows="10"></textarea>
        <button type="submit" disabled={isSending}>SUBMIT</button>
      </form>
    </ContactSectionStyled>
  );
}

function createContactSectionStyled() {
  return styled.div`
    h2 {
      margin-bottom: 36px !important;
    }

    form {
      display: flex;
      flex-direction: column;
      margin-top: 54px;

      label {
        color: var(--pri-color);
        margin-top: 1em;
        margin-bottom: .5em;
      }

      span {
        opacity: .7;
      }

      input, select, textarea {
        width: 100%;
        font-family: var(--pri-font);
        font-size: var(--fluid-5);
        padding: .2em .4em;
      }

      button {
        font-family: var(--pri-font);
        font-weight: 700;
        letter-spacing: .2em;
        margin-top: 1em;
        padding-block: .7em;
      }
    }
  `
}

function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay)
  }
}