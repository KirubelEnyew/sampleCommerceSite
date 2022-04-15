import React, { useContext, useState, useEffect, useCallback } from 'react'
import { Product, ProductKind } from '../../Shared/products'
import './styles.css'
import { MdCheck } from 'react-icons/md'
import CartContext, { CartObject } from '../../Shared/CartContext'
interface Props {
  data: Array<Product>
  filter?: ProductKind,
}

const Products: React.FC<Props> = ({ data, filter }) => {
  const [hoverFor, setHoverFor] = useState('')
  const [products, setProducts] = useState<Array<Product>>([])
  const { setCartData, cartData } = useContext(CartContext)

  const checkItemExists = useCallback((product: Product) => {
    let exists = false
    cartData.forEach((cartValue: CartObject) => {
      if (cartValue.product.id === product.id) {
        exists = true
      }
    })
    return exists
  }, [cartData])

  const handleAddToCart = useCallback((value: { product: Product, quantity: number }) => {
    let newCartData = [...cartData]
    if (checkItemExists(value.product)) {
      newCartData.splice(newCartData.indexOf(value), 1)
      setCartData(newCartData)
      return
    }
    newCartData.push(value)
    setCartData(newCartData)
  }, [cartData, setCartData, checkItemExists])

  useEffect(() => {
    // console.log(cartData);
    setProducts(data)
  }, [data, cartData])
  return (
    <div className='product-container' id='slide-up'>
      {products.map((product, index) => (
        filter ? filter === product.productKind &&
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
              onClick={() => { handleAddToCart({ product, quantity: 1 }) }}
              onMouseOver={() => setHoverFor(product.id)}
              onMouseOut={() => setHoverFor('')}
              className='product-button'
              style={checkItemExists(product) ? { backgroundColor: 'inherit', color: 'black' } : undefined}
            >
              {/* eslint-disable-next-line */}
              {checkItemExists(product) ? 'Added' : 'ADD TO CART'} {product.id === hoverFor || checkItemExists(product) && <MdCheck />}
            </button>
          </div>
          :
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
              onClick={() => { handleAddToCart({ product, quantity: 1 }) }}
              onMouseOver={() => setHoverFor(product.id)}
              onMouseOut={() => setHoverFor('')}
              className='product-button'
              style={checkItemExists(product) ? { backgroundColor: 'white ', color: 'black' } : undefined}
            >
              {/* eslint-disable-next-line */}
              {checkItemExists(product) ? 'Added' : 'ADD TO CART'} {product.id === hoverFor || checkItemExists(product) && <MdCheck />}
            </button>
          </div>
      ))}
    </div>
  )
}

export default Products