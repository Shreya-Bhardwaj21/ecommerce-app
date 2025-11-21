import {useEffect, useState} from "react";
 export default function useGetApiData(id){
    let [item, setItem] = useState({})
    useEffect(() => {
        datafetch();
    }, []);
    async function datafetch() {
        let res = await fetch(`https://fakestoreapi.com/products/${id}`);
        console.log(res);
        let data = await res.json();
        console.log(data);
        setItem(data);
    }
    return item;
 }