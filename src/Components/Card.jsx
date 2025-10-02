import React from 'react'
import shoes from '../assets/img/shoes image.png'
import "../App.css"
const Card = () => {
  return (
    <div className='container'>
      <div className='info item'>
        <h1 className='headline'>YOUR FEET DESERVE THE BEST</h1>
        <p className='description'>Step into comfort and style with these versatile shoes. Perfect for everyday wear, they combine durability with modern design.</p>
        <div className='btn'>
            <button className='buy'>Buy Now</button>
            <button className='cat'>Category</button>
        </div>
      </div>
      <div className='image item'>
        <img className='img' src={shoes} width={500} height={500} alt="shoes" />
      </div>
    </div>
  )
}

export default Card
