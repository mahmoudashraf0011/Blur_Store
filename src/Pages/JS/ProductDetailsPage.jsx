import React from 'react'
import ProductDetailsContainer from '../../Components/JS/Products/ProductDetails/ProductDetailsContainer'
import img from '../../images/testcard.jpg'
import '../../Components/CSS/Products.css'
import { Accordion } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProductOneHook from '../../LogicHooks/Products/ProductOneHook'
export default function ProductDetailsPage() {
  const {id}=useParams();
  console.log(id);
  const [product]=ProductOneHook(id)
  return (  
    <div className='ProductDetailsPage'>
        <ProductDetailsContainer cate={product.category} img={product.image} title={product.title} price={product.price} />
        <div className='productDetailsDescription'>
            <Accordion >
                <Accordion.Item eventKey="0" style={{backgroundColor:"#ddd"}}>
                    <Accordion.Header >About this Product</Accordion.Header>
                        <Accordion.Body>
                            {product.description}
                        </Accordion.Body>
                </Accordion.Item>
        </Accordion>
        </div>
    </div>
  )
}
