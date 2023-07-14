import React from 'react'
import PageHeader from '../pageheader/PageHeader'
import { BsInfoCircleFill } from 'react-icons/bs'
import ImageOne from '../images/movie.png'
import ImageTwo from '../images/collegeportal.png'
import ImageThree from '../images/library.png'
import Image4 from '../images/weather.png'
import Image5 from '../images/name.png'
import Image6 from '../images/calculater.png'
import './styles.scss'
import { Link } from 'react-router-dom'
function Index() {
  const data = [
    {
      id: 1,
      name: 'BookShows (Fullstck)',
      Image: ImageOne,
      link: 'https://dapper-cucurucho-7b2a5e.netlify.app',
    },
    {
      id: 2,
      name: 'collegeportal (Fullstack)',
      Image: ImageTwo,
      link: 'https://abc-college-portal.netlify.app',
    },
    {
      id: 3,
      name: 'library (Frontend only)',
      Image: ImageThree,
      link: 'https://sage-treacle-4afc00.netlify.app',
    },
    {
      id: 4,
      name: 'weather Report (Frontend only)',
      Image: Image4,
      link: 'https://heroic-twilight-8b4c2e.netlify.app',
    },
    {
      id: 5,
      name: 'Search Nationality Based On Name (Frontend only)',
      Image: Image5,
      link: 'https://golden-daifuku-0d77c4.netlify.app',
    },
    {
      id: 6,
      name: 'calculater(Frontend only)',
      Image: Image6,
      link: 'https://willowy-panda-a92a9f.netlify.app',
    },
  ]
  return (
    <section id="projects" className="projects">
      <PageHeader
        headerText="My Project's"
        Icon={<BsInfoCircleFill size={40} />}
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
