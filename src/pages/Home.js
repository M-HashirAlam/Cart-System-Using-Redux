import React from 'react'
import Product from '../components/Product'

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <section>
        <h3 style={{backgroundColor:'red', color:"white"}}>Products</h3>
        <Product />
      </section>
    </div>
  )
}

export default Home
