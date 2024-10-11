import React, { useEffect } from 'react'
import elec from '../../../images/cates/elec.jpg'
import elec2 from '../../../images/cates/elec2.jpg'
import jew from '../../../images/cates/jew.jpeg'
import jew2 from '../../../images/cates/jew2.webp'
import man from '../../../images/cates/man.jpg'
import man2 from '../../../images/cates/man2.jpeg'
import women from '../../../images/cates/women.jpg'
import women2 from '../../../images/cates/woman2.webp'

import '../../CSS/Home/Categories.css'
import { Link } from 'react-router-dom'

export default function Categories() {



  return (
    <div className='categories'>
        <h2 className='categoriesHeader'>Categories</h2>
        <div className='container'>
            <div className='categoriesItems'>
                <div className='categoriesItem'>
                    <Link to="/products/category/jewelery" >
                        <div className='categoriesItemImg'>
                            <img src={jew} alt='jewelery'/>
                        </div>
                        <h3 className='categoriesItemTitle'>jewelery</h3>
                    </Link>
                </div>
                <div className='categoriesItem'>
                    <Link to="/products/category/electronics" >
                        <div className='categoriesItemImg'>
                            <img src={elec} alt='electronics'/>
                        </div>
                        <h3 className='categoriesItemTitle'>electronics</h3>
                    </Link>
                </div>
                <div className='categoriesItem'>
                    <Link to="/products/category/men's clothing" >
                        <div className='categoriesItemImg'>
                            <img src={man} alt='clothing'/>
                        </div>
                        <h3 className='categoriesItemTitle'>men's clothing</h3>
                    </Link>
                </div>
                <div className='categoriesItem'>
                    <Link to="/products/category/women's clothing" >
                        <div className='categoriesItemImg'>
                            <img src={women} alt='clothing'/>
                        </div>
                        <h3 className='categoriesItemTitle'>women's clothing</h3>
                    </Link>
                </div>
            </div>
        </div>

    </div>
  )
}
