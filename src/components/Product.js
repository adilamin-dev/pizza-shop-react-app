import React from 'react'

const Product = () => {
  return (
    <>
        <div className='p-item'>
            <img src='./img/anthony-cantin.jpg' alt='item' />
            <div className='item-info'>
                <h4>Item name</h4>
                <div className='size-wraper'>
                    <span className='item-size'>Small</span>
                </div>
                <div className='item-cta'>
                    <span className='item-price'>50$</span>
                    <span className='item-add-btn'>Add</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product