import React from "react";
import { Product } from "../components/Product";
import useProducts from "../hooks/useProducts";

export const ProductList = () => {
  const { products, error, isLoading } = useProducts();

  if (products) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    );
    }else if(isLoading) {
        return( 
        <div className="h-screen flex items-center justify-center">
            <h1>Cargando...</h1> 
        </div>
        )
    }else{
        return(         
        <div className="h-screen flex items-center justify-center">
            <h1>Sin articulos</h1> 
        </div>)
    }
};
