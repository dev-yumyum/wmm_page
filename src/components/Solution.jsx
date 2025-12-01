import React from 'react'
import './Solution.css'

function Solution() {
  return (
    <section className="solution section">
      <div className="container">
        <h2 className="section-title">어떻게 문제를 해결하려고 하나요?</h2>
        <p className="section-subtitle">
          냠냠픽업은 비싼 배달비, 복잡한 배달앱 수수료 문제를<br />
          지역을 좁히고, 경쟁을 줄이고, 배달방식을 변경하여 해결합니다
        </p>

        <div className="solution-content">
          <div className="solution-hero">
            <div className="solution-text">
              <h3 className="solution-title">
                도보픽업과 로봇배달로<br />
                가격을 내립니다
              </h3>
              <p className="solution-description">
                지금 배달앱의 배달반경(4km, 서울시 구단위)은 너무 넓습니다. 
                프랜차이즈 출점 반경 제한은 보통 1km (법적 기준 500m)입니다.
              </p>
              <p className="solution-description">
                배달앱에서는 유명 브랜드 치킨을 3~4개씩 볼 수 있죠. 
                이런 경우 가까운 치킨집이 아니라, 할인이 높은 치킨집에 주문을 하게 됩니다. 
                <strong>경쟁적으로 광고, 할인 프로모션에 참여할 수밖에 없는 구조</strong>입니다.
              </p>
            </div>
            <div className="solution-visual">
              <div className="visual-circle">
                <p className="visual-text large">도보 픽업</p>
              </div>
              <div className="visual-arrow">→</div>
              <div className="visual-circle">
                <p className="visual-text large">로봇 배달</p>
              </div>
            </div>
          </div>

          <div className="solution-features">
            <div className="solution-card">
              <div className="card-header">
                <span className="card-icon">✓</span>
                <h4 className="card-title">슬리퍼 상권 중심</h4>
              </div>
              <p className="card-description">
                도보 픽업 가능한 슬리퍼 상권 식당 중심으로 운영
              </p>
            </div>

            <div className="solution-card">
              <div className="card-header">
                <span className="card-icon">✓</span>
                <h4 className="card-title">반경 1.5km</h4>
              </div>
              <p className="card-description">
                전체 주문의 절반은 1km 이내 거리에서 발생. 
                1.5km는 지하철역 3개를 커버하는 충분한 범위
              </p>
            </div>

            <div className="solution-card">
              <div className="card-header">
                <span className="card-icon">✓</span>
                <h4 className="card-title">새로운 배달 방식</h4>
              </div>
              <p className="card-description">
                오토바이 배달 대신 도보 픽업과 로봇배달로 전환
              </p>
            </div>
          </div>

          <div className="stats-comparison">
            <div className="comparison-item">
              <div className="comparison-label">기존 배달앱 반경</div>
              <div className="comparison-value bad">평균 4km</div>
            </div>
            <div className="comparison-arrow">→</div>
            <div className="comparison-item">
              <div className="comparison-label">냠냠픽업 반경</div>
              <div className="comparison-value good">1.5km</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution

