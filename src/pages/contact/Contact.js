import React from 'react'

import PageHeader from '../pageheader/PageHeader'
import { Animate } from 'react-simple-animate'
import { BsChatLeftText } from 'react-icons/bs'
import './styles.scss'
function Contact() {
  return (
    <section id="contact" className="contact">
      <PageHeader headerText="contact" Icon={<BsChatLeftText size={40} />} />
      <div className="contact_content">
        <Animate
          play
          duration={1}
          delay={0.5}
          start={{ transform: 'translateX(-200)' }}
          end={{ transform: 'translateX(0)' }}
        >
          <h3 className="contact_content_header_text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={1}
          start={{ transform: 'translateX(200)' }}
          end={{ transform: 'translateX(0)' }}
        >
          <form
            className="contact_content_form"
            action="https://getform.io/f/8fe6b3df-0acd-4b05-9d73-5de0b2e410c6"
            method="post"
          >
            <div className="contact_content_form_controlWrapper">
              <div>
                <label htmlFor="name" className="namelabel">
                  Name
                </label>
                <input name="name" type="text" className="inputname" required />
              </div>
              <div>
                <label htmlFor="email" className="emaillabel">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  className="inputemail"
                  required
                />
              </div>
              <div>
                <label htmlFor="des" className="deslabel">
                  Description
                </label>
                <textarea
                  rows="7"
                  name="des"
                  type="text"
                  className="inputdes"
                  required
                />
              </div>
            </div>
            <div>
              <Animate
                play
                duration={1.5}
                delay={1}
                start={{ transform: 'translateX(-900px)' }}
                end={{ transform: 'translateX(0px)' }}
              >
                <a
                  href="https://drive.google.com/file/d/1BrkHsN8OAcuiaDouVRqYNcRbvbmlZ_Uz/view?usp=sharing"
                  target="_blank"
                >
                  <button className="about_content_personalInfo_buttons">
                    Resume
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/sakthisampth-sampth-907955188/"
                  target="_blank"
                >
                  <button className="about_content_personalInfo_buttons">
                    LinkedIn
                  </button>
                </a>
              </Animate>
            </div>
            <button className="submit">Sumbit</button>
          </form>
        </Animate>
      </div>
    </section>
  )
}

export default Contact
