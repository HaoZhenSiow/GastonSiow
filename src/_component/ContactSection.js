import styled from 'styled-components'
import { useState, useRef } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
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
      <div>
        <address>
          <p className='companyName'>Comuna Interiors Pte Ltd</p>
          <p>261 Waterloo St</p>
          <p>#02-07 Waterloo Centre</p>
          <p>Singapore 180261</p>
          <p><BsFillTelephoneFill className='icon'/> 8264 2952</p>
          <p><MdEmail className='icon'/> hk.siow@comuna.com.sg</p>
        </address>
        <form ref={formRef} action={handleSubmit}>
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
      </div>
    </ContactSectionStyled>
  );
}

function createContactSectionStyled() {
  return styled.div`
    & > div {
      display: flex;
      flex-direction: column;

      @media (min-width: 900px) {
        flex-direction: row-reverse;
        column-gap: 28px;

        form {
          width: 50%;
          flex-grow: 1;
          margin-top: 0;

          label:first-child {
            margin-top: 0;
          }
        }
      }
    }
    h2 {
      @media (max-width: 899px) {
       margin-bottom: 36px !important;
      }
    }

    .companyName {
      font-size: 1.2em;
      font-weight: 700;
      font-family: var(--sec-font);
      color: var(--highligh-color);
    }

    .icon {
      transform: translateY(2px) scale(1.2);
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