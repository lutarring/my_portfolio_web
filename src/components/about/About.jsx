import React from 'react'
import './about.css'
import Picture from '../../assets/about.jpeg'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from "react-icons/tb";
import { SiProtonvpn } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={Picture} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h4>Experience</h4>
              <h5>
                2019年から就職し、システムエンジニアとして4年近く働いています。
              </h5>
            </article>
            <article className="about_card">
              <TbCertificate className="about_icon" />
              <h4>Certificate</h4>
              <h5>ITパスポート</h5>
              <h5>基本情報技術者試験</h5>
              <h5>日本語能力試験N1</h5>
              <h5>TOEIC 825点</h5>
            </article>
            <article className="about_card">
              <SiProtonvpn className="about_icon" />
              <h4>Projects</h4>
              <h5>
                四つのプロジェクトに参画した経験。証券，銀行，社内管理などの業界業務知識があります。
              </h5>
            </article>
          </div>
          <div className="about_ps">
            <p>中国武漢の出身です。</p>
            <p>2017年日本に来ており、１年間日本語学校に通いました。</p>
            <p>2019年卒業後、ソフトウェア開発会社に入社。</p>
            <p>証券、銀行、社内管理などの業務システム開発に携わる。</p>
            <p>1社目ではシステムエンジニアとして</p>
            <p>詳細設計から，開発，テストを2年担当していました。</p>
            <p>2社目ではアジャイル開発をメインに、</p>
            <p>ウェブアプリケーションの開発の経験を積んでおります。</p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About