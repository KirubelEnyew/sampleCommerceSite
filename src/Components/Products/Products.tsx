import React, { useState } from 'react'
import { Product } from '../../Shared/products'
import './styles.css'
import { MdCheck } from 'react-icons/md'
interface Props {
  data: Array<Product>
}

const Products: React.FC<Props> = ({ data }) => {
  const [hoverFor, setHoverFor] = useState('')
  return (
    <div className='product-container'>
      {data.map((product, index) => (
        <div className='product-card' key={product.id}>
          {product.discounted &&
            <div style={{ position: 'relative' }}>
              <div className='discount-icon-container'>
                <div className='discount-icon'>
                  20%
                </div>
              </div>
            </div>
          }
          <img
            src={`https://picsum.photos/200${index}`}
            alt='product-img'
            className='product-image'
          />
          <div className='title-price-container'>
            <h5>{product.productName}</h5>
            <h5>${product.price}</h5>
          </div>
          <button
            onMouseOver={() => setHoverFor(product.id)}
            onMouseOut={() => setHoverFor('')}
            className='product-button'
          >
            ADD TO CART {product.id === hoverFor && <MdCheck />}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products