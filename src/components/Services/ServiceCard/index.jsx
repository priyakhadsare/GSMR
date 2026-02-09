import React,{useRef} from 'react'
import "./ServiceCard.css"
import { services } from '../../../data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ServiceCard = ({
    name,
    icon,
    description
}) => {
  return (
    <div className='service__card'>
        <div className="icon__container">
            {icon}
        </div>
        <h3 className="name">{name}</h3>
        <p className="text__muted description">{description}</p>
      
    </div>
  )
}

export default ServiceCard
