import React ,{useEffect}from 'react'
import axios from 'axios'
import { setProducts } from './redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { ProductComponents } from './ProductComponent'

export const ProductListing = () => {
  const product = useSelector((state) => state)
  //Now we have to store the fetched data in the redux store
  const dispatch = useDispatch()


const fetchProducts = () =>{
axios.get('https://fakestoreapi.com/products')
.then(res => {
  dispatch(setProducts(res.data))
})
.catch(err => {console.log('Error',err)})
}

useEffect(()=> {
  fetchProducts()
})


  console.log(product)
  return (
    <div className='row'>
      <ProductComponents/>
    </div>
  )
}

