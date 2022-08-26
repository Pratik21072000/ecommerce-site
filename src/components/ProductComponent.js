import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports'

export const ProductComponents = () => {
  //We can connect the react-redux store function to the component simply by useSelector function.
  const products = useSelector((state)=> state.productReducer.products)
  const renderList = products.map((product) => {
    const {id,title, price,category,image} = product
    return(
      <div className='col-md-4' key={id}>
        <Link to={`/product/${id}`}>
          <div className='card'>
            <div className='image'>
            <img src={image} id="pic"alt={title}/>
            </div>
            <div className='title'>
             <div className='header'>{title}</div>
             <div className='meta price'> ${price}</div>
             <div className='category'>{category}</div>
             </div>
          </div>
          </Link>
  </div>
    )
  });

return( 
  <>
  {renderList} 
  </>
)

};


