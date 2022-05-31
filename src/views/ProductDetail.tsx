import React from "react";
import { useParams, Link } from 'react-router-dom';
import useDetailProduct from "../hooks/useDetailProduct";
import StarRatingComponent from 'react-star-rating-component';
export const ProductDetail = () => {
  let { id } = useParams();
  const { error, isLoading, productDetail } = useDetailProduct(id);
  if (productDetail) {
    return (
      <div className="w-5/6 mx-auto py-5">
        <Link  to="/"> <i className="fa fa-arrow-left"></i> Regresar</Link>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div className="flex justify-center">
            <img className="object-scale-down max-h-48" src={productDetail.image} alt="" />
          </div>
          <div className="col-span-2 py-4">
            <small className="mb-2">{productDetail.category}</small>
            <h1 className="font-bold mt-2">{productDetail?.title}</h1>
            <h3 className="font-extrabold mt-2">${productDetail?.price}</h3>
            <p className="my-3">{productDetail?.description}</p>
            <StarRatingComponent 
              name="rate2" 
              editing={false}
              renderStarIcon={() => <span> <i className="fa fa-star"></i> </span>}
              starCount={5}
              value={productDetail?.rating.rate}
            />
            <div className="grid grid-cols-2 mt-5">
                <select className="w-11/12 xl:w-2/6 md:w-4/6  text-center bg-lime-100 rounded" name="quantity" id="quantity">
                  {
                    [1,2,3,4,5,6,7,8,9,10].map(v => {
                      return <option key={v} value={v}>{v}</option>
                    })
                  }
                </select>
                <div className="flex justify-end">
                  <button className="bg-black w-11/12 md:w-5/6 xl:w-3/6 text-white px-2 py-3 hover:bg-slate-600 transition duration-150 ease-in-out rounded">Agregar al carrito</button>
                </div>
            </div>
          </div>
        </div>
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
