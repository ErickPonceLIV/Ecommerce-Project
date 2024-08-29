import { getProducts } from "../services/product.service"
import { useState,useEffect } from "react"
import { Link } from 'react-router-dom';


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
      <div className="flex flex-wrap justify-center">
        {products.map((item) => (
          <div
            key={item.id}  // Usar `id` como key único
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4"
          >
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={item.image}
                alt={item.product_name}
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {}  {/* Nombre del producto */}
                  <Link to={`/product/${item.id}`}>{item.product_name}</Link>
                </h5>
              </a>
              <div className="flex items-center mt-2.5 mb-5">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                  {item.category}  {/* Categoría */}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${item.price}  {/* Precio */}
                </span>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  


export default Product