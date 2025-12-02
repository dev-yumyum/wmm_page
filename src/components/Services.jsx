import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      title: '빠른 픽업',
      description: '주문 후 5분 이내 준비 완료 알림을 받고 바로 픽업하세요',
      icon: '🚀',
      color: '#FF6B6B'
    },
    {
      title: '다양한 메뉴',
      description: '한식, 중식, 양식, 일식 등 1,000개 이상의 레스토랑',
      icon: '🍱',
      color: '#4ECDC4'
    },
    {
      title: '실시간 알림',
      description: '주문 접수부터 준비 완료까지 실시간으로 확인',
      icon: '🔔',
      color: '#FFE66D'
    },
    {
      title: '간편 결제',
      description: '카드, 페이, 포인트 등 다양한 결제 수단 지원',
      icon: '💳',
      color: '#A8E6CF'
    }
  ]

  return (
    <section className="services section" id="services">
      <div className="container">
        <h2 className="section-title">냠냠픽업만의 특별한 서비스</h2>
        <p className="section-subtitle">편리하고 빠른 픽업 경험을 제공합니다</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon" style={{ background: `${service.color}20` }}>
                <span>{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services



