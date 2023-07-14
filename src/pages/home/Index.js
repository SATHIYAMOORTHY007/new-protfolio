import React from 'react'
import './styles.scss'
import { Animate } from 'react-simple-animate'
import { useNavigate } from 'react-router-dom'
function Index() {
  const nav = useNavigate()
  const NavContact = () => {
    nav('/contact')
  }
  return (
    <>
      <section id="home" className="home">
        <div className="home_text_wrapper">
          <h1>
            Hello, I'm Sathiya moorthy S
            <br />
            <span>Full Stack Developer</span>
          </h1>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: 'translateY(550px)' }}
          end={{ transform: 'translatex(0px)' }}
        >
          <div className="home_contect_me">
            <button onClick={NavContact}>Hire Me</button>
          </div>
        </Animate>
      </section>
    </>
  )
}

export default Index
