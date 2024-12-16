import React from "react"

function Customer(){
    return(
        <>
        <div className="h-auto w-full flex flex-col justify-start bg-slate-100 border-2">
            <p className="text-pretty font-bold text-black text-center">Add Customers</p>
            <div className=" flex flex-row h-[70px] w-full p-4 mt-3 ">

                <p className="text-black text-xl mr-20">Name:</p>
                 <input className="p-3 w-[600px]" type="text" placeholder="Name"></input>         
            </div>
            <div className=" flex flex-row h-[70px] w-full p-4 mt-3 ">

                <p className="text-black text-xl mr-20">Phone:</p>
                 <input className="p-3 w-[600px]" type="text" placeholder="Phone"></input>         
            </div>
        </div>
        </>
    )
}

export default Customer