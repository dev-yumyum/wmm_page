import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>우공이산</h1>
          </div>
          <nav className="nav">
            <a href="#service">서비스 소개</a>
            <a href="#team">팀 소개</a>
            <a href="#culture">회사 문화</a>
            <a href="#join">채용</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

