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
      front: 'https://github.com/SATHIYAMOORTHY007/guvi-hackathon2-frontend',
      back: 'https://github.com/SATHIYAMOORTHY007/guvi-hackathon2-backend',
    },
    {
      id: 2,
      name: 'College Portal (Fullstack)',
      Image: ImageTwo,
      link: 'https://abc-college-portal.netlify.app',
      des:
        'This webapp working like role based.examiner add the student exam marks and leaves, student only view there info only,principal view all of them ,admin only add examiner & principal',
      front: 'https://github.com/SATHIYAMOORTHY007/college-portal-frontend',
      back: 'https://github.com/SATHIYAMOORTHY007/college-portal-backend',
    },
    {
      id: 7,
      name: 'url Shortener(Fullstack)',
      Image: Image7,
      link: 'https://relaxed-sherbet-24bea5.netlify.app/',
      des: 'Long url converted to shot url.',
      front: 'https://github.com/SATHIYAMOORTHY007/frontend',
      back: 'https://github.com/SATHIYAMOORTHY007/backend',
    },
    {
      id: 3,
      name: 'Library (Frontend only)',
      Image: ImageThree,
      link: 'https://sage-treacle-4afc00.netlify.app',
      des:
        'Mockapi used to show all the book list for here.we will check the books quantity and also add,delete or update the book list',
      front: 'https://github.com/SATHIYAMOORTHY007/librarymanagement',
    },
    {
      id: 4,
      name: 'Weather Report (Frontend only)',
      Image: Image4,
      link: 'https://heroic-twilight-8b4c2e.netlify.app',
      des:
        'Weather Api used to display all country nation flags,latitudes if we click check weather button it will show the weather of particular country',
      front: 'https://github.com/SATHIYAMOORTHY007/weather-api',
    },
    {
      id: 5,
      name: 'Search Nationality Based On Name (Frontend only)',
      Image: Image5,
      link: 'https://golden-daifuku-0d77c4.netlify.app',
      des:
        'we will give any name to the input box, it will check to mockapi and give the each country probability',
      front: 'https://github.com/SATHIYAMOORTHY007/hackkathon',
    },
    {
      id: 6,
      name: 'Calculater(Frontend only)',
      Image: Image6,
      link: 'https://willowy-panda-a92a9f.netlify.app',
      des: 'this is used to perform basic calculation',
      front: 'https://github.com/SATHIYAMOORTHY007/calculator',
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
          'transform: rotateX(0deg) rotateY(0deg) skewX(180deg)',
          'transform: rotateX(0deg) rotateY(0deg) ',
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
                  <a href={item.front} target="_black">
                    Frontend Url
                  </a>
                  {item.back ? (
                    <a href={item.back} target="_black">
                      Backend Url
                    </a>
                  ) : (
                    ''
                  )}
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
