import React from 'react'
import './Team.css'

function Team() {
  const teamMembers = [
    {
      name: '김경임',
      position: 'PMO 기획대표',
      email: 'cony@yumyum.im',
      description: '비즈니스 전략과 기획을 총괄합니다',
      image: '/kim-kyungim.avif'
    },
    {
      name: '권세영',
      position: '백엔드 개발 API',
      email: 'seyoung@yumyum.im',
      description: '안정적인 API 서버를 구축합니다',
      image: '/kwon-seyoung.avif'
    },
    {
      name: '정도원',
      position: '영업 마케팅',
      email: 'dowon@yumyum.im',
      description: '고객과의 소통을 책임집니다',
      image: '/도원프로필.png'
    },
    {
      name: '이화랑',
      position: '디자인',
      email: 'rang@tiny-works.net',
      description: '사용자 경험을 디자인합니다',
      image: '/lee-hwarang.avif'
    },
    {
      name: '신석재',
      position: '프론트 개발 POS',
      email: 'seokjae@yumyum.im',
      description: 'POS 시스템을 개발합니다',
      image: '/shin-seokjae.avif'
    },
    {
      name: '김완태',
      position: '백엔드 개발 인프라',
      email: 'kwt@yumyum.im',
      description: '안정적인 인프라를 구축합니다',
      image: '/kim-wantae.avif'
    }
  ]

  return (
    <section className="team section" id="team">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">냠냠픽업을 만들어가는 사람들</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="member-image">
                <img 
                  src={member.image} 
                  alt={`${member.name} 프로필`}
                  className="member-avatar"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error(`이미지 로드 실패: ${member.image}`);
                  }}
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-description">{member.description}</p>
                <a href={`mailto:${member.email}`} className="member-email">
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

