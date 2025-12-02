import React from 'react'
import './Features.css'

function Features() {
  const features = [
    {
      title: '사장님을 위한 관리 시스템',
      description: '주문 관리부터 메뉴 관리, 통계 분석까지 한 번에',
      points: [
        '실시간 주문 알림',
        '간편한 메뉴 관리',
        '매출 통계 대시보드',
        '고객 리뷰 관리'
      ],
      image: '📊'
    },
    {
      title: '고객을 위한 편리한 픽업',
      description: '주문부터 픽업까지 모든 과정을 앱에서',
      points: [
        '주변 레스토랑 검색',
        '실시간 준비 현황',
        '포인트 적립 혜택',
        '주문 내역 관리'
      ],
      image: '📱'
    }
  ]

  return (
    <section className="features section" id="features">
      <div className="container">
        <h2 className="section-title">누구나 쉽게 사용하는 냠냠픽업</h2>
        <div className="features-content">
          {features.map((feature, index) => (
            <div className="feature-row" key={index} style={{ flexDirection: index % 2 === 1 ? 'row-reverse' : 'row' }}>
              <div className="feature-image">
                <div className="feature-visual">
                  <span className="feature-emoji">{feature.image}</span>
                </div>
              </div>
              <div className="feature-text">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-points">
                  {feature.points.map((point, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features



