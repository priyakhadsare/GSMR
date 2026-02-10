import React from "react"
import "./Logo.css"
import logoImage from "../../assets/logo.jpeg"

const Logo = () => {
  return (
    <div className="logo">
      <div className="icon__container">
        <img src={logoImage} alt="Logo" className="logo__image" />
      </div>
    
    </div>
  )
}

export default Logo

