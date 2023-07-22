import React from 'react'
import PageHeader from '../pageheader/PageHeader'
import { FaDiagramProject } from 'react-icons/fa6'
import ImageOne from '../images/movie.png'
import ImageTwo from '../images/collegeportal.png'
import ImageThree from '../images/library.png'
import Image4 from '../images/weather.png'
import Image5 from '../images/name.png'
import Image6 from '../images/calculater.png'
import Image7 from '../images/url shortner.png'
import './styles.scss'
import { AnimateKeyframes } from 'react-simple-animate'
import { Link } from 'react-router-dom'
function Index() {
  const data = [
    {
      id: 1,
      name: 'BookShows (Fullstack)',
      Image: ImageOne,
      link: 'https://dapper-cucurucho-7b2a5e.netlify.app',
      des: 'Book Your Movie Tickets. this app working like bookmyshow',
    },
    {
      id: 2,
      name: 'collegeportal (Fullstack)',
      Image: ImageTwo,
      link: 'https://abc-college-portal.netlify.app',
      des:
        'This webapp working like role based.examiner add the student exam marks and leaves, student only view there info only,principal view all of them ,admin only add examiner & principal',
    },
    {
      id: 3,
      name: 'library (Frontend only)',
      Image: ImageThree,
      link: 'https://sage-treacle-4afc00.netlify.app',
      des:
        'Mokeapi used to show all the book list for here.we will check the books quantity and also add,delete or update the book list',
    },
    {
      id: 4,
      name: 'weather Report (Frontend only)',
      Image: Image4,
      link: 'https://heroic-twilight-8b4c2e.netlify.app',
      des:
        'Weather Api used to display all country nation flags,latitudes if we click check weather button it will show the weather of particular country',
    },
    {
      id: 5,
      name: 'Search Nationality Based On Name (Frontend only)',
      Image: Image5,
      link: 'https://golden-daifuku-0d77c4.netlify.app',
      des:
        'we will give any name to the input box, it will check to mokeapi and give the each country probability',
    },
    {
      id: 6,
      name: 'calculater(Frontend only)',
      Image: Image6,
      link: 'https://willowy-panda-a92a9f.netlify.app',
      des: 'this is used to perform basic calculation',
    },
    {
      id: 7,
      name: 'url shortener(Fullstack)',
      Image: Image7,
      link: 'https://willowy-panda-a92a9f.netlify.app',
      des: 'Long url converted to shot url.',
    },
  ]
  return (
    <section id="projects" className="projects">
      <PageHeader
        headerText="My Project's"
        Icon={<FaDiagramProject size={40} />}
      />
      ComponentHook
      <AnimateKeyframes
        play
        pause={false}
        iterationCount="1"
        direction="alternate"
        duration={1}
        keyframes={[
          'transform: rotateX(0deg) rotateY(0deg)',
          'transform: rotateX(260deg) rotateY(0deg) ',
        ]}
      >
        <div className="projects_content_cards">
          {data.map((item, i) => (
            <a href={item.link} target="_blank" className="button">
              <div key={i} className="projects_content_cards_item">
                <div className="projects_content_cards_item_img_wrapper">
                  <p>{item.name}</p>
                  <img src={item.Image} alt="images" />

                  <summary>{item.des}</summary>
                </div>
              </div>
            </a>
          ))}
        </div>
      </AnimateKeyframes>
    </section>
  )
}

export default Index
