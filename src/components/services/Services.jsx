import React from 'react'
import './services.css'
import { FaFileCode } from 'react-icons/fa'
import { SiMoleculer } from 'react-icons/si'
import { RiDatabase2Line } from 'react-icons/ri'
import ImageFirst from '../../assets/eggplant.jpeg'
import ImageSecond from '../../assets/green.jpeg'
import ImageThird from '../../assets/straw.jpeg'
import ImageForth from '../../assets/peer.jpeg'





const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        {/* first Application */}
        <article className="service">
          <div className="portfolios">
            <div className="portfolios_item">
              <div className="image">
                <a
                  href="https://react-chat-app-ab6e6.web.app/"
                  className="portfolios_btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ImageFirst} alt="APP01 Image" />
                </a>
              </div>
            </div>
          </div>
          <div className="service_head">
            <a
              href="https://react-chat-app-ab6e6.web.app/"
              className="portfolios_btn"
              target="_blank"
              rel="noreferrer"
            >
              <h5>Chat App</h5>
              <h3>チャットアプリ</h3>
            </a>
          </div>

          <ul className="service_list">
            <li>
              <FaFileCode className="service_list_icon" />
              <p>React、JavaScipt、CSS3</p>
            </li>
            <li>
              <SiMoleculer className="service_list_icon" />
              <p>Firebase: Auth、Hosting</p>
            </li>
            <li>
              <RiDatabase2Line className="service_list_icon" />
              <p>Firestore</p>
            </li>
          </ul>
        </article>

        {/* second Application */}
        <article className="service">
          <div className="portfolios">
            <div className="portfolios_item">
              <div className="image">
                <a
                  href="https://my-capricorn-app.web.app//"
                  className="portfolios_btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={ImageSecond} alt="APP02 Image" />
                </a>
              </div>
            </div>
          </div>
          <div className="service_head">
            <a
              href="https://my-capricorn-app.web.app//"
              className="portfolios_btn"
              target="_blank"
              rel="noreferrer"
            >
              <h5>Staffs List App</h5>
              <h3>社員管理</h3>
            </a>
          </div>

          <ul className="service_list">
            <li>
              <FaFileCode className="service_list_icon" />
              <p>React、TypeScript、MUI</p>
            </li>
            <li>
              <SiMoleculer className="service_list_icon" />
              <p>Firebase：Hosting</p>
            </li>
            <li>
              <RiDatabase2Line className="service_list_icon" />
              <p>Firestore</p>
            </li>
          </ul>
        </article>

        {/* third Application */}
        <article className="service">
          <div className="portfolios">
            <div className="portfolios_item">
              <div className="image">
                <img src={ImageThird} alt="App03 Image" />
              </div>
            </div>
          </div>
          <div className="service_head">
            <h5>Chat App</h5>
            <h3>TODO</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaFileCode className="service_list_icon" />
              <p>Dumy</p>
            </li>
            <li>
              <SiMoleculer className="service_list_icon" />
              <p>Dumy</p>
            </li>
            <li>
              <RiDatabase2Line className="service_list_icon" />
              <p>Dumy</p>
            </li>
          </ul>
        </article>

        {/* fouth Application */}
        <article className="service">
          <div className="portfolios">
            <div className="portfolios_item">
              <div className="image">
                <img src={ImageForth} alt="App03 Image" />
              </div>
            </div>
          </div>
          <div className="service_head">
            <h5>Chat App</h5>
            <h3>TODO</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaFileCode className="service_list_icon" />
              <p>Dumy</p>
            </li>
            <li>
              <SiMoleculer className="service_list_icon" />
              <p>Dumy</p>
            </li>
            <li>
              <RiDatabase2Line className="service_list_icon" />
              <p>Dumy</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services