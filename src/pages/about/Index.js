import React from 'react'
import PageHeader from '../pageheader/PageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import { FaGithub, FaLinkedinIn, FaFile } from 'react-icons/fa'
import { FaDev, FaDatabase } from 'react-icons/fa'
import { FaHtml5, FaCss3, FaReact, FaNodeJs } from 'react-icons/fa'
import './styles.scss'
function Index() {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" Icon={<BsInfoCircleFill size={40} />} />
      <div className="about_content">
        <div className="about_content_personalInfo">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'translateX(-900px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            <p>
              An earnest person who is looking for an opportunity and a medium
              where I could implement my Full-stack development skills by
              adhering to the professional standards with persistent learning of
              the required functionality and the technology stack.
            </p>

            {/*  <h3 className="personal_info">Education Information</h3> */}
            {/*  <table className="table">
              <thead>
                <tr>
                  <th scope="col">Course</th>
                  <th scope="col">Marks</th>
                  <th scope="col">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    10 <sup>th</sup>
                  </th>
                  <th>435</th>
                  <th>87</th>
                </tr>

                <tr>
                  <th scope="row">
                    12 <sup>th</sup>
                  </th>
                  <th>1010</th>
                  <th>84</th>
                </tr>
                <tr>
                  <th scope="row">B.E (CSE)</th>
                  <th></th>
                  <th>72</th>
                </tr>
              </tbody>
            </table> */}
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: 'translateX(-900px)' }}
            end={{ transform: 'translateX(0px)' }}
          >
            {/* LinkedIn */}
            <a
              href="https://drive.google.com/file/d/1BrkHsN8OAcuiaDouVRqYNcRbvbmlZ_Uz/view?usp=sharing"
              target="_blank"
            >
              <button className="about_content_personalInfo_buttons">
                <FaFile size={60} />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/sakthisampth-sampth-907955188/"
              target="_blank"
            >
              <button className="about_content_personalInfo_buttons">
                <FaLinkedinIn size={60} />
              </button>
            </a>
            {/* FaGithub  */}
            <a href="https://github.com/SATHIYAMOORTHY007" target="_blank">
              <button className="about_content_personalInfo_buttons">
                <FaGithub size={60} />
              </button>
            </a>
          </Animate>
        </div>
        <Animate
          play
          duration={1}
          delay={0.5}
          start={{ transform: 'translateY(-1000px)' }}
          end={{ transform: 'translateY(0px)' }}
        >
          <div className="about_content_services">
            <div className="about_content_services_innercontent">
              <div>
                <FaReact size={60} color="var(---yellow-them-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(---yellow-them-main-color)" />
              </div>
              <div>
                <FaNodeJs size={60} color="var(---yellow-them-main-color)" />
              </div>
              <div>
                <FaCss3 size={60} color="var(---yellow-them-main-color)" />
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  )
}

export default Index
