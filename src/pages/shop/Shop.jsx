import React from 'react'
import { PRODUCTS } from "../../products";
import Product from './Product';
import './shop.css'
function Shop() {
  return (
    <div className='shop'>
        <div>
            <h1>ibotech shop</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product) => <Product data={product} key={product.id}/>)} 
        </div>
    </div>
  )
}

export default Shop