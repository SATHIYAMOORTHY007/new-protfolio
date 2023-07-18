import React from 'react'
import PageHeader from '../pageheader/PageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import JAVASCRIPT from '../images/javascript.png'
import html from '../images/Screenshot 2023-07-18 155122.png'
import './styles.scss'
import { FaCertificate } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Index() {
  const data = [
    {
      id: 1,
      name: 'Javascript',
      Image: JAVASCRIPT,
    },
    {
      id: 2,
      name: 'Responsive Web Design',
      Image: html,
      link:
        'https://www.freecodecamp.org/certification/fccc321d5a3-8a05-46cd-bb36-6b1959c61c47/responsive-web-design',
    },
  ]
  return (
    <section id="projects" className="projects">
      <PageHeader
        headerText="My Certificates"
        Icon={<FaCertificate size={40} />}
      />
      <div className="projects_content_cards">
        {data.map((item, i) => (
          <div key={i} className="projects_content_cards_item">
            <div className="projects_content_cards_item_img_wrapper">
              <a href={item.link} target="_blank" className="button">
                <img src={item.Image} alt="images" />
                <p>{item.name}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Index
