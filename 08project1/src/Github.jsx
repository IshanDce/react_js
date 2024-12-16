import React from "react"

import { useState,useEffect} from "react"

function Github(){
    const[Data,setData]= useState([])

    useEffect(()=>{
        fetch('https://api.github.com/users/IshanDce')
        .then(response=>(response.json()))
        .then(data=> setData(data))
    },[])
    return(
        <>
        <div className=" text-center text-3xl bg-gray-600 text-white p-4"> followers:{Data.followers}
            <img src={Data.avtar_url} alt='github picture' width={300}/>
        </div>
        </>
    )
}
export default Github