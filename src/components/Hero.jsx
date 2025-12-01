import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      <div className="container">
        <div className="hero-content-center">
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
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="value-text">혁신</div>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="value-text">신뢰</div>
            </div>
            <div className="value-item">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="value-text">성장</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

