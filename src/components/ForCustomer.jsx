import React from 'react'
import './ForCustomer.css'

function ForCustomer() {
  const targetCustomers = [
    {
      title: '1인 가구',
      description: '최소주문금액이 부담스러운 1인 가구를 위한 서비스'
    },
    {
      title: '도보 픽업 거주자',
      description: '도보 픽업에 유리한 인프라에 살고 있는 거주자'
    },
    {
      title: '효율 중시 고객',
      description: '배달비에 민감하고, 시간 효율을 중시하는 포장 고객'
    }
  ]

  const customerBenefits = [
    {
      title: '매장 가격으로 주문',
      description: '배달앱 이중가격이 아닌 매장 가격 그대로 (10~15% 낮은 가격)',
      highlight: true
    },
    {
      title: '최적화된 UX',
      description: '포장 주문과 도보 픽업에 최적화된 경험 (정확한 가게 입구점 제공)'
    },
    {
      title: '우리동네 맛집',
      description: '광고 없이 우리동네 맛집에서 주문'
    },
    {
      title: '포장 혜택',
      description: '최소주문금액 없음, 포장 할인 혜택'
    }
  ]

  return (
    <section className="for-customer section">
      <div className="container">
        <h2 className="section-title">고객은 누구인가요?</h2>
        
        <div className="customer-intro">
          <p className="intro-text">
            높아진 배달수수료, 빠른 수령, 포장 할인 등 다양한 이유로 
            배달이 아닌 <strong>포장 주문을 하는 고객이 점점 늘어나고 있습니다</strong>. 
            포장 고객들은 대체적으로 배달비에 민감하고, 시간 효율을 중시하는 분들이죠.
          </p>
          <p className="intro-text">
            특히 1인 가구는 배달앱의 최소주문금액을 채울 수 없는 주문이 많아, 
            배달보다 포장을 선호하기도 합니다.
          </p>
        </div>

        <div className="target-section">
          <h3 className="subsection-title">🎯 타깃 고객</h3>
          <p className="subsection-description">
            냠냠픽업은 상업시설과 주거가 혼합된 주상복합, 회사원 많은 산업단지, 
            학생들이 많은 대학캠퍼스와 같은 젊은 소비인구가 많고, 
            <strong>상업시설 밀도 높은 도심지에 거주하는 포장 고객을 타깃</strong>합니다.
          </p>
          
          <div className="target-grid">
            {targetCustomers.map((customer, index) => (
              <div className="target-card" key={index}>
                <div className="target-number">{String(index + 1).padStart(2, '0')}</div>
                <h4 className="target-title">{customer.title}</h4>
                <p className="target-description">{customer.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="benefits-section">
          <h3 className="subsection-title">고객은 왜 냠냠픽업을 사용해야 하나요?</h3>
          
          <div className="price-problem">
            <div className="problem-box">
              <h4 className="problem-title">배달앱의 이중가격 문제</h4>
              <p className="problem-text">
                배달과 포장의 가장 큰 차이는 고객이 가게에 방문해서 찾아가야 한다는 점입니다. 
                라이더가 수행하는 배달업무를 고객이 직접 수행하는 것인데, 
                실제 라이더에게 지급하는 비용만큼 고객에게 돌아가지 않습니다.
              </p>
              <div className="price-highlight">
                <p>
                  지금 배달앱에 있는 음식가격은 배달비와 수수료가 포함된 이중가격으로 
                  <strong>매장가보다 10~15% 상향</strong>되어 있습니다.
                </p>
                <p>
                  포장하는 고객들은 배달도 하지 않는데, 올라간 가격으로 주문해야 합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="benefits-grid">
            {customerBenefits.map((benefit, index) => (
              <div 
                className={`benefit-card ${benefit.highlight ? 'highlight' : ''}`} 
                key={index}
              >
                <div className="benefit-number">{String(index + 1).padStart(2, '0')}</div>
                <h4 className="benefit-title">{benefit.title}</h4>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="ux-feature">
            <div className="feature-content">
              <h4 className="feature-title">냠냠픽업이 제공하는 편리함</h4>
              <p className="feature-text">
                배달앱에서는 지도에 찍힌 위치와 실제 가게 위치가 다른 경우도 많아 
                가게 찾기 어려움이 있는데, 포장앱에서는 <strong>가게 방문에 최적화된 지도 서비스</strong>로 
                도보 픽업에 최적화된 경험을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForCustomer

