import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { ProductInterface } from '../interfaces/Products';
import productsApi from "../api/api";


export default function useDetailProduct(id?:string){
    const [error,setError] = useState(null)
    const [productDetail, setProductDetail] = useState<null | ProductInterface>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getProduct = async () => {
        setIsLoading(true);
        try {
          const { data } = await productsApi.get("/products/"+ id);
          setProductDetail(data);
        } catch (error: any) {
            setError(error)
        }
        setIsLoading(false);
    }


    
    useEffect(() => {
        getProduct()
    }, [id])

    return { error, isLoading, productDetail};

}