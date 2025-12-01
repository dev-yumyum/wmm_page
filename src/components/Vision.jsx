import React from 'react'
import './Vision.css'

function Vision() {
  return (
    <section className="vision section">
      <div className="container">
        <div className="vision-content">
          <div className="vision-text">
            <h2 className="vision-title">
              우리의 비전
            </h2>
            <p className="vision-description">
              냠냠픽업은 <strong>지속가능한 수수료 1%</strong>로<br />
              음식점 사장님들의 부담을 줄이고,<br />
              고객들에게는 더 나은 가격으로<br />
              맛있는 음식을 제공합니다.
            </p>
            <div className="vision-stats">
              <div className="vision-stat">
                <div className="vision-stat-number">1%</div>
                <div className="vision-stat-label">지속가능한 수수료</div>
              </div>
              <div className="vision-stat">
                <div className="vision-stat-number">2025.11</div>
                <div className="vision-stat-label">서비스 오픈 예정</div>
              </div>
            </div>
          </div>
          <div className="vision-image">
            <div className="vision-visual">
              <div className="vision-circle vision-circle-1"></div>
              <div className="vision-circle vision-circle-2"></div>
              <div className="vision-circle vision-circle-3"></div>
              <div className="vision-text-overlay">
                <div className="vision-center-text">VISION</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision

