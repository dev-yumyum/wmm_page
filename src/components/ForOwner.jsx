import React from 'react'
import './ForOwner.css'

function ForOwner() {
  return (
    <section className="for-owner section">
      <div className="container">
        <h2 className="section-title">사장님은 왜 냠냠픽업을 사용해야 하나요?</h2>
        
        <div className="owner-content">
          <div className="problem-section">
            <h3 className="owner-subtitle">전화주문의 문제점</h3>
            <div className="problem-list">
              <p>
                배달앱 대안으로 '전화주문 + 포장'이 자주 언급되는데, 
                전화주문은 사장님들 입장에서는 <strong>처리하기 곤란한 주문 방식</strong>입니다.
              </p>
              <ul className="issue-list">
                <li>
                  <span className="issue-icon">×</span>
                  <span>전화벨이 울리는 순간 응대하는 것은 업무 흐름을 끊습니다</span>
                </li>
                <li>
                  <span className="issue-icon">×</span>
                  <span>유선상으로 전달하는 주문은 잘못 접수될 가능성이 높습니다</span>
                </li>
                <li>
                  <span className="issue-icon">×</span>
                  <span>젊은 고객들은 전화하는 것 자체를 싫어합니다</span>
                </li>
                <li>
                  <span className="issue-icon">×</span>
                  <span>선결제가 없으면 노쇼 발생 시 대처할 방법이 없습니다</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="solution-section">
            <div className="insight-box">
              <h3 className="insight-title">배달앱의 본질적 가치</h3>
              <p className="insight-text">
                초기 배달앱의 근본적인 가치는 <strong>전단지와 전화주문의 불편함을 정보기술로 해결</strong>하는 것이었습니다.
              </p>
              <p className="insight-text">
                배달앱이 아니어도 전단지, 전화주문을 대체할 주문앱은 필요합니다. 
                특히 요즘처럼 인건비가 올라가고, 매장도 키오스크로 주문받는 시대에 
                아무리 배달앱이 미워도 <strong>'전화주문 + 포장'은 모두에게 불편</strong>할 뿐입니다.
              </p>
            </div>

            <div className="benefits-grid">
              <div className="benefit-card highlight">
                <div className="benefit-icon">✓</div>
                <div className="benefit-content">
                  <h4 className="benefit-title">포장 주문에도 주문중개앱 필수</h4>
                  <p className="benefit-description">
                    편리한 주문 관리와 결제 시스템
                  </p>
                </div>
              </div>

              <div className="benefit-card highlight">
                <div className="benefit-icon">✓</div>
                <div className="benefit-content">
                  <h4 className="benefit-title">
                    비싼 배달앱 수수료 <span className="cross">×</span> 중개수수료 1% <span className="check">✓</span>
                  </h4>
                  <p className="benefit-description">
                    지속가능한 수수료 체계
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForOwner

