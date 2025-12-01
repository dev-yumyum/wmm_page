import React from 'react'
import './Problem.css'

function Problem() {
  return (
    <section className="problem section">
      <div className="container">
        <h2 className="section-title">어떤 문제를 해결하려고 하나요?</h2>
        
        <div className="problem-content">
          <div className="problem-card main-problem">
            <h3 className="problem-title">복잡한 배달앱 수수료 문제</h3>
            <div className="problem-description">
              <p>
                최근 몇 년간 배달앱을 통한 음식 주문은 일상화되었지만, 
                <strong>'수수료' 문제</strong>는 갈수록 복잡하고, 갈등이 커지고 있습니다.
              </p>
              <p>
                배달앱 수수료는 광고비, 중개수수료, 프로모션 분담금, 배달비까지 섞인 
                <strong>복합과금체계</strong>로 사장님들은 '얼마 남는지' 마진을 예측하기가 어려운 상황입니다.
              </p>
            </div>
          </div>

          <div className="problem-card secondary-problem">
            <h3 className="problem-title">무료배달의 진실</h3>
            <div className="problem-description">
              <p>
                쿠팡이츠 무료배달은 소비자에게 혜택처럼 보였지만, 
                무료배달은 실제로 배달이 '공짜'가 아닙니다. 
                <strong>배달비는 반드시 누군가 부담해야 하는 비용</strong>입니다.
              </p>
              <p>
                무료배달 초기에는 쿠팡이 마케팅 비용으로 부담했지만, 
                점차 음식점 사장님들이 배달비를 부담하게 되었습니다.
              </p>
            </div>
          </div>

          <div className="impact-box">
            <p className="impact-text">
              이제 배달비는 음식가격에 반영되었고,<br />
              <strong>음식가격 인상으로 이용자와 사장님 모두 부담에 시달리고 있습니다.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem

