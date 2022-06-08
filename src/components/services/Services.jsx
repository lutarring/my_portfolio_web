import React from 'react'
import './services.css'
import { FaFileCode } from 'react-icons/fa'
import { SiMoleculer } from 'react-icons/si'
import { RiDatabase2Line } from 'react-icons/ri'
import ImageFirst from '../../assets/eggplant.jpeg'
import ImageSecond from '../../assets/green.jpeg'
import ImageThird from '../../assets/peer.jpeg'




const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        
        {/* first Application */}
        <article className="service">
          <div className="portfolios">
            <div className="portfolios_item">
              <div className="image">
                <a href="https://react-chat-app-ab6e6.web.app/" className="portfolios_btn" target="_blank" rel="noreferrer">
                  <img src={ImageFirst} alt="APP01 Image" />
                  </a>
              </div>
              {/* <div className="hover_item">
                <a href="https://react-chat-app-ab6e6.web.app/" className="portfolios_btn" target="_blank" rel="noreferrer">Click To Try</a>
              </div> */}
            </div>
          </div>
          <div className="service_head">
            <h3>チャットアプリ</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaFileCode className="service_list_icon"/>
              <p>React、JavaScipt、CSS3</p>
            </li>
            <li>
              <SiMoleculer className="service_list_icon"/>
              <p>Firebase(Auth,Hosting)</p>
            </li>
            <li>
              <RiDatabase2Line className="service_list_icon"/>
              <p>Firestore</p>
            </li>
          </ul>
          </article>

          {/* second Application */}
        <article className="service">
          <div className="portfolios">
            <div className="portfolios_item">
              <div className="image">
                <img src={ImageSecond} alt="APP02 Image" />
              </div>
              {/* <div className="hover_item">
                <a href="https://react-chat-app-ab6e6.web.app/" className="portfolios_btn" target="_blank" rel="noreferrer">Click To Try</a>
              </div> */}
            </div>
          </div>
          <div className="service_head">
            <h3>TODO</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaFileCode className="service_list_icon"/>
              <p>Dumy</p>
            </li>
            <li>
              <SiMoleculer className="service_list_icon"/>
              <p>Dumy</p>
            </li>
            <li>
              <RiDatabase2Line className="service_list_icon"/>
              <p>Dumy</p>
            </li>
            </ul>
            </article>

          {/* second Application */}
        <article className="service">
          <div className="portfolios">
            <div className="portfolios_item">
              <div className="image">
                <img src={ImageThird} alt="App03 Image" />
              </div>
              {/* <div className="hover_item">
                <a href="https://react-chat-app-ab6e6.web.app/" className="portfolios_btn" target="_blank" rel="noreferrer">Click To Try</a>
              </div> */}
            </div>
          </div>
          <div className="service_head">
            <h3>TODO</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaFileCode className="service_list_icon"/>
              <p>Dumy</p>
            </li>
            <li>
              <SiMoleculer className="service_list_icon"/>
              <p>Dumy</p>
            </li>
            <li>
              <RiDatabase2Line className="service_list_icon"/>
              <p>Dumy</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services