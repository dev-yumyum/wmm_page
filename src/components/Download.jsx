import React from 'react'
import './Download.css'

function Download() {
  return (
    <section className="download section" id="download">
      <div className="container">
        <div className="download-content">
          <h2 className="download-title">
            지금 바로 냠냠픽업을<br />
            시작하세요
          </h2>
          <p className="download-description">
            iOS와 Android 모두 지원합니다
          </p>
          <div className="download-buttons">
            <button className="download-btn apple">
              <div className="btn-content">
                <span className="btn-icon">🍎</span>
                <div className="btn-text">
                  <div className="btn-sub">Download on the</div>
                  <div className="btn-main">App Store</div>
                </div>
              </div>
            </button>
            <button className="download-btn google">
              <div className="btn-content">
                <span className="btn-icon">📱</span>
                <div className="btn-text">
                  <div className="btn-sub">GET IT ON</div>
                  <div className="btn-main">Google Play</div>
                </div>
              </div>
            </button>
          </div>
          <div className="qr-section">
            <div className="qr-code">
              <div className="qr-placeholder">QR</div>
            </div>
            <p className="qr-text">QR 코드로 간편하게 다운로드</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download







