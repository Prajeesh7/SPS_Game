import React from 'react';
import { useEffect,useState } from "react";

const index = () => {

    const [api,setApi] = useState([]) 
    useEffect(()=>{
        fetch('http://localhost:4000/api').then((res)=>{
            res.json()
        }).then((data)=>{
            setApi(data)
            console.log(data.json())
        })
    },[])

  return (
    <h1>hello friends...</h1>
  )
}

export default index