import React from 'react'
import './Statistics.css'

function Statistics() {
  return (
    <section className="statistics section">
      <div className="container">
        <h2 className="section-title">냠냠픽업과 함께 성장하세요</h2>
        <p className="section-subtitle">매일 증가하는 사용자와 주문량</p>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-value">1,234+</div>
            <div className="stat-name">제휴 레스토랑</div>
            <div className="stat-growth">전월 대비 +15%</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">52,891</div>
            <div className="stat-name">누적 다운로드</div>
            <div className="stat-growth">전월 대비 +23%</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">128,450</div>
            <div className="stat-name">월 주문 건수</div>
            <div className="stat-growth">전월 대비 +31%</div>
          </div>
          <div className="stat-box">
            <div className="stat-value">4.8점</div>
            <div className="stat-name">평균 평점</div>
            <div className="stat-growth">5점 만점</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics







