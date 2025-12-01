import React from 'react'
import './Join.css'

function Join() {
  const positions = [
    {
      category: '개발',
      jobs: [
        '백엔드 개발자 (Node.js)',
        '프론트엔드 개발자 (React)',
        '풀스택 개발자',
        'DevOps 엔지니어'
      ]
    },
    {
      category: '디자인',
      jobs: [
        'UX/UI 디자이너',
        '프로덕트 디자이너',
        '그래픽 디자이너'
      ]
    },
    {
      category: '비즈니스',
      jobs: [
        '마케팅 매니저',
        '영업 매니저',
        'CS 매니저',
        '사업 기획자'
      ]
    }
  ]

  return (
    <section className="join section" id="join">
      <div className="container">
        <h2 className="section-title">Join Us</h2>
        <p className="section-subtitle">냠냠픽업과 함께 성장할 동료를 찾습니다</p>
        
        <div className="positions-container">
          {positions.map((position, index) => (
            <div className="position-category" key={index}>
              <h3 className="category-title">{position.category}</h3>
              <ul className="jobs-list">
                {position.jobs.map((job, idx) => (
                  <li key={idx} className="job-item">
                    <span className="job-bullet">→</span>
                    <span className="job-name">{job}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="join-cta">
          <h3 className="cta-title">함께 만들어갈 준비가 되셨나요?</h3>
          <p className="cta-description">
            자유로운 환경에서 최고의 동료들과 함께<br />
            음식 산업의 혁신을 이끌어갈 기회를 잡으세요
          </p>
          <div className="cta-buttons">
            <button className="btn-apply">채용 공고 보기</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join

