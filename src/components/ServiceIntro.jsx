import React from 'react'
import './ServiceIntro.css'

function ServiceIntro() {
  return (
    <section className="service-intro section">
      <div className="container">
        <div className="intro-hero">
          <h2 className="intro-title">냠냠픽업은 어떤 서비스인가요?</h2>
          <p className="intro-subtitle">
            포장, 지도, 데이터, 로봇으로 배달비 문제를 해결합니다
          </p>
        </div>

        <div className="intro-content">
          <div className="intro-main-features">
            <div className="feature-box">
              <span className="feature-number">01</span>
              <p>반경 1.5km 이내 식당에 포장 주문하는 서비스</p>
            </div>
            <div className="feature-box">
              <span className="feature-number">02</span>
              <p>주상복합, 캠퍼스, 아파트단지와 같은 좁은 지역 단위로 운영</p>
            </div>
            <div className="feature-box">
              <span className="feature-number">03</span>
              <p>배달앱 전용가격이 아닌 매장가격 그대로 주문</p>
            </div>
            <div className="feature-box">
              <span className="feature-number">04</span>
              <p>음식포장으로 시작해서 로봇배달(1층 픽업)로 확대</p>
            </div>
          </div>

          <div className="mission-box">
            <h3 className="mission-title">우리의 미션</h3>
            <p className="mission-text">지속가능한 하이퍼로컬 식당테크 플랫폼</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceIntro

