import React from 'react'
import PageHeader from '../pageheader/PageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'
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

            <h3 className="personal_info">Education Information</h3>
            <table className="table">
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
            </table>
          </Animate>
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: 'translateY(-1000px)' }}
          end={{ transform: 'translateY(0px)' }}
        >
          <div className="about_content_services">
            <div className="about_content_services_innercontent">
              <div>
                <FaDev size={60} color="var(---yellow-them-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var(---yellow-them-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var(---yellow-them-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var(---yellow-them-main-color)" />
              </div>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  )
}

export default Index
