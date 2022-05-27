import React from 'react'
import banner from './banner.jpg'
import '../home.scss'
function HomeBanner() {
  return (
    <div className="home-banner" style={{backgroundImage: `url(${banner})`}}>
      <div className="home-banner__info">
        <div className="title">Online <br /> Education</div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur adipisci, sed inventore, odit odio in repudiandae </p>
      </div>
    </div>
  )
}

export default HomeBanner