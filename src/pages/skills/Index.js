import React from 'react'
import PageHeader from '../pageheader/PageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import Skillsutils from './Skillsutils'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress'
import './styles.scss'
function Index() {
  return (
    <section id="skill" className="Skill">
      <PageHeader
        headerText="My Skills"
        Icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skill_content_wrapper">
        {Skillsutils.map((item, i) => (
          <div key={i} className="skill_content_wrapper_innercontent">
            <Animate
              play
              duration={1.5}
              delay={0.5}
              start={{ transform: 'translateY(1000px)' }}
              end={{ transform: 'translateY(0px)' }}
            >
              <h3 className="skill_content_wrapper_innercontent_catagorytext">
                {item.label}
              </h3>
              <div className="skill_content_wrapper_innercontent_progressbar_container">
                {item.data.map((skillItem) => (
                  <div className="progress_bar">
                    <p>{skillItem.SkillName}</p>
                    <Line
                      percent={skillItem.percentage}
                      strokeWidth="2"
                      strokeColor={'var(---yellow-them-main-color)'}
                      trailWidth="2"
                      strokeLinecap="square"
                    />
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Index
