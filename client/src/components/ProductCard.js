import React from 'react'

import ProductDesc from './ProductDesc'

const ProductCard = ({ el }) => {

  return (
    <div className='body22'>
      <div className="containerrr">
        <div className="imagess">
          <img src={el.image} style={{ maxHeight: "200px", minHeight: "200px", marginTop: "20px" }} />
        </div>


        <div className="productt">
          <p>{el.name}</p>

          <h2>{el.prix} DT</h2>
          <p className="descr">
            {el.description}
            <ProductDesc el={el} style={{ marginTop: "50px" }} />
          </p>



        </div>
      </div>
    </div>
  )
}

export default ProductCard