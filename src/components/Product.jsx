import { getProducts } from "../services/product.service"
import { useState,useEffect } from "react"




const Product = () => {
    const[products,setProducts] = useState([])
    useEffect(()=>{
        
const fetchingProducts = async () =>{
    try {
        const response = await getProducts()
        const {data} = response
        setProducts(data)
    } catch (error) {
        console.error('Ocurrio un error al obtener productos',error.message)
    }
}
fetchingProducts()
    },[])
  return (
    <>
 {
    products.map((item) => {
      return (
        <div
        key={item.id}
        >
          
          <h1>{ item.product_name}</h1>
        </div>
  )
})}
  
    </>
  )
}

export default Product