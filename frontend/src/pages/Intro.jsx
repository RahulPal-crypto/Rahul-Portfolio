import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PortfolioIntro from '../components/PortfolioIntro'

export default function Intro(){
  const navigate = useNavigate()

  const openPortfolio = useCallback(() => {
    sessionStorage.setItem('portfolioIntroSeen', 'true')
    navigate('/', { replace: true })
  }, [navigate])

  return <PortfolioIntro onComplete={openPortfolio} />
}
