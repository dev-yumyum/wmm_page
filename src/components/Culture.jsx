import React from 'react'
import './Culture.css'

function Culture() {
  const cultures = [
    {
      title: '투명한 소통',
      description: '모든 정보는 투명하게 공유되며, 누구나 의견을 제시할 수 있습니다',
      color: '#FF6B6B'
    },
    {
      title: '수평적 문화',
      description: '직급이 아닌 역할로 구분되며, 서로를 존중하는 문화를 만듭니다',
      color: '#4ECDC4'
    },
    {
      title: '자율과 책임',
      description: '자유롭게 일하되, 결과에 대한 책임을 함께 나눕니다',
      color: '#FFE66D'
    },
    {
      title: '성장 지원',
      description: '개인의 성장이 곧 회사의 성장입니다. 배움을 적극 지원합니다',
      color: '#95E1D3'
    },
    {
      title: '워라밸',
      description: '일과 삶의 균형을 중요하게 생각하며, 유연한 근무를 지향합니다',
      color: '#F38181'
    },
    {
      title: '도전과 혁신',
      description: '실패를 두려워하지 않고 새로운 시도를 장려합니다',
      color: '#AA96DA'
    }
  ]

  return (
    <section className="culture section">
      <div className="container">
        <h2 className="section-title">Our Culture</h2>
        <p className="section-subtitle">냠냠픽업이 일하는 방식</p>
        <div className="culture-grid">
          {cultures.map((culture, index) => (
            <div className="culture-card" key={index}>
              <div className="culture-number" style={{ color: culture.color }}>
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="culture-title">{culture.title}</h3>
              <p className="culture-description">{culture.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Culture

