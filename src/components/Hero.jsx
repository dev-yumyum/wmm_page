import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">
              맛있게 냠냠,<br />
              냠냠픽업
            </h1>
            <p className="hero-description">
              우리는 지속가능한 수수료 1%로<br />
              음식점과 고객 모두가 행복한 세상을 만들어갑니다
            </p>
            <div className="hero-values">
              <div className="value-item">
                <div className="value-text">혁신</div>
              </div>
              <div className="value-item">
                <div className="value-text">신뢰</div>
              </div>
              <div className="value-item">
                <div className="value-text">성장</div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <img src="/main.png" alt="냠냠픽업" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

