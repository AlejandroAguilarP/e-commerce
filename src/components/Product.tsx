import React from 'react'
import { Link } from 'react-router-dom'
import { ProductInterface } from '../interfaces/Products'

interface Props {
    product: ProductInterface
}


export const Product = ({product}: Props) => {
  return (
    <Link to={'/products/detail/'+ product.id}>
        <div className="shadow-lg border-2 h-64 hover:scale-105 transition duration-150 ease-in-out rounded-md text-center my-7 mx-6 px-3">
            <div className="flex justify-center p-5">
                <img className="object-scale-down h-32 w-64" src={product.image} alt={product.title} />
            </div>
            <p className="text-blue-900 font-semibold mt-2">{product.title}</p>
        </div>
    </Link>
  )
}
