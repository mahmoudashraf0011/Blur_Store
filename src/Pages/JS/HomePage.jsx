import React from 'react'
import BG from '../../Components/JS/Home/BG'
import Features from '../../Components/JS/Home/Features'
import Categories from '../../Components/JS/Home/Categories'
import Contact from '../../Components/JS/Home/Contact'

export default function HomePage() {

  return (
    <section className='homePage'>
        <BG />
        <Features />
        <Categories />
  
    </section>
  )
}
