import React from 'react'
import f1 from '../../../images/f1.webp'
import f2 from '../../../images/f2.webp'
import f3 from '../../../images/f3.webp'
import '../../CSS/Home/Features.css'
export default function Features() {
  return (
    <div className='features'>
      <h2>We are solving the biggest problems in furniture</h2>
      <div className='featuresItems'>
        <div className='featuresItem'>
            <div className='featuresItemImg'>
                <img src={f1} alt='feature' />
            </div>
            <div className='featuresItemContent'>
                <h4 className='featuresItemContentTitle'>Fast & affordable shipping</h4>
                <p className='featuresItemContentDesc'>We’re able to keep inventory on hand thanks to our modular design, which means your order gets to your door way faster.</p>
            </div>
        </div>
        <div className='featuresItem'>
            <div className='featuresItemImg'>
                <img src={f2} alt='feature' />
            </div>
            <div className='featuresItemContent'>
                <h4 className='featuresItemContentTitle'>Modular, easy-to-move design</h4>
                <p className='featuresItemContentDesc'>Our innovative modular design is driven by the belief that furniture should fit this home, and the next one.</p>
            </div>
        </div>
        <div className='featuresItem'>
            <div className='featuresItemImg'>
                <img src={f3} alt='feature' />
            </div>
            <div className='featuresItemContent'>
                <h4 className='featuresItemContentTitle'>Durable, premium materials</h4>
                <p className='featuresItemContentDesc'>We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain Italian leather.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
