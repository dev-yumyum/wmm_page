import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">우공이산</h3>
            <p className="footer-description">
              맛있는 음식을 빠르게 픽업하세요
            </p>
            <div className="social-links">
              <a href="#" className="social-link">페이스북</a>
              <a href="#" className="social-link">인스타그램</a>
              <a href="#" className="social-link">유튜브</a>
            </div>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">서비스</h4>
            <ul className="footer-links">
              <li><a href="#">고객 앱</a></li>
              <li><a href="#">사장님 앱</a></li>
              <li><a href="#">제휴 문의</a></li>
              <li><a href="#">광고 문의</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">회사</h4>
            <ul className="footer-links">
              <li><a href="#">회사 소개</a></li>
              <li><a href="#">채용</a></li>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">블로그</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">고객지원</h4>
            <ul className="footer-links">
              <li><a href="#">자주 묻는 질문</a></li>
              <li><a href="#">이용약관</a></li>
              <li><a href="#">개인정보처리방침</a></li>
              <li><a href="#">문의하기</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="company-info">
            <p>주식회사 우공이산 | 대표이사: 홍길동</p>
            <p>사업자등록번호: 123-45-67890 | 통신판매업신고: 2024-서울강남-12345</p>
            <p>주소: 서울특별시 강남구 테헤란로 123, 우공이산빌딩 5층</p>
            <p>이메일: contact@yumyum.im | 고객센터: 1588-1234</p>
          </div>
          <p className="copyright">
            © 2024 우공이산. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

