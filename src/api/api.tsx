import axios from "axios";

const baseUrl = 'https://fakestoreapi.com/';
const productsApi = axios.create({baseURL: baseUrl, headers: {'Content-Type': 'application/json'}});




export default productsApi;