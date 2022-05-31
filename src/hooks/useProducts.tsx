import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { ProductInterface } from '../interfaces/Products';
import productsApi from "../api/api";


export default function useProducts(){
    const [error,setError] = useState(null)
    const [products, setProducts] = useState<null | ProductInterface[]>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getProducts = async () => {
        setIsLoading(true);
        try {
          const { data } = await productsApi.get("/products");
          console.log(data);
          setProducts(data);
        } catch (error: any) {
          throw new Error(error.response.data.message);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getProducts()
    }, [])
    

    return { products, error, isLoading};

}