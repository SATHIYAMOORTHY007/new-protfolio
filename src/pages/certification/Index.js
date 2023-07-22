import React from 'react'
import PageHeader from '../pageheader/PageHeader'
import html from '../images/Screenshot 2023-07-18 155122.png'
import html5 from '../images/Html5.png'
import css3 from '../images/Css3.png'
import js from '../images/Javascript.png'
import nodejs from '../images/Nodejs.png'
import mongo from '../images/Mongodb.png'
import mysql from '../images/Mysql.png'
import reactjs from '../images/Reactjs.png'
import bootstrap from '../images/Bootstrap.png'
import fullstack from '../images/Fullstack.png'
import './styles.scss'
import { Animate } from 'react-simple-animate'
import { FaCertificate } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Index() {
  const data = [
    {
      id: 1,
      name: 'Responsive Web Design',
      Image: html,
      link:
        'https://www.freecodecamp.org/certification/fccc321d5a3-8a05-46cd-bb36-6b1959c61c47/responsive-web-design',
    },
    {
      id: 2,
      name: 'Html5',
      Image: html5,
      link:
        'https://drive.google.com/file/d/1iF1GDqgfcNjtSOPZS_6x0KxcD496Io-A/view?usp=drive_link',
    },
    {
      id: 3,
      name: 'CSS3',
      Image: css3,
      link:
        'https://drive.google.com/file/d/1hNQ2a0ccsnJcDbxZT0B5nfdVYkwF6F4_/view?usp=drive_link',
    },
    /*  {
      id: 4,
      name: 'JAVASCRIPT',
      Image: js,
      link:
        'https://drive.google.com/open?id=1R74FOn3PI69Vk0XYl6GhS3L8fKTC_yUT&usp=drive_copy',
    }, */
    {
      id: 5,
      name: 'REACTJS',
      Image: reactjs,
      link:
        'https://drive.google.com/file/d/14Arjmcna5vWs56WxBv8LrGrsYzJprwmh/view?usp=drive_link',
    },
    {
      id: 6,
      name: 'BOOTSTRAP',
      Image: bootstrap,
      link:
        'https://drive.google.com/file/d/1UKiWIAG_NKtPyP439KFGgezjKO7ozhd2/view?usp=drive_link',
    },
    {
      id: 7,
      name: 'NODEJS',
      Image: nodejs,
      link:
        'https://drive.google.com/file/d/1noTq9Eb900GoD0DP05g6o9QM7QVLbqIJ/view?usp=drive_link',
    },
    {
      id: 8,
      name: 'MONGODB',
      Image: mongo,
      link:
        'https://drive.google.com/file/d/14z-vFXqVex91W0C1ZY1UWTJSbrl3pMMJ/view?usp=drive_link',
    },
    {
      id: 9,
      name: 'MYSQL',
      Image: mysql,
      link:
        'https://drive.google.com/file/d/1wgZvlpPEaC3pOnf0BPWpYIrJBMWxM-G7/view?usp=drive_link',
    },
    {
      id: 10,
      name: 'FULLSTACK',
      Image: fullstack,
      link:
        'https://drive.google.com/file/d/102szStMzTPuLMvnzVUwvqpF-0QcPwtoK/view?usp=drive_link',
    },
  ]
  return (
    <section id="projects" className="projects">
      <PageHeader
        headerText="My Certificates"
        Icon={<FaCertificate size={40} />}
      />
      <Animate
        play
        duration={1.5}
        delay={0.5}
        start={{ transform: 'translateX(-500px)' }}
        end={{ transform: 'translateY(0px)' }}
      >
        <div className="projects_content_cards">
          {data.map((item, id) => (
            <div className="projects_content_cards_item1">
              <div
                key={id}
                className="projects_content_cards_item1_img_wrapper"
              >
                <a href={item.link} target="_blank" className="button">
                  <img src={item.Image} alt="images" />
                  <p>{item.name}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </Animate>
    </section>
  )
}

export default Index
