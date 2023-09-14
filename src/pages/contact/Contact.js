import React from 'react'
import PageHeader from '../pageheader/PageHeader'
import { Animate } from 'react-simple-animate'
import { BsChatLeftText } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn, FaFile } from 'react-icons/fa'
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

            <button className="submit">Sumbit</button>
          </form>
          <div>
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: 'translateX(-900px)' }}
              end={{ transform: 'translateX(0px)' }}
            >
              {/* LinkedIn */}
              <a
                href="https://drive.google.com/file/d/1E2t3AL9a9tCZ7zJeKFJ2hZAslP4o_XVn/view?usp=sharing"
                target="_blank"
              >
                <FaFile size={60} />
              </a>
              <a
                href="https://www.linkedin.com/in/sakthisampth-sampth-907955188/"
                target="_blank"
              >
                <FaLinkedinIn size={60} />
              </a>
              {/* FaGithub  */}
              <a href="https://github.com/SATHIYAMOORTHY007" target="_blank">
                <FaGithub size={60} />
              </a>
            </Animate>
          </div>
        </Animate>
      </div>
    </section>
  )
}

export default Contact
