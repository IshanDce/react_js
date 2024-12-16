import React from "react";

function Landing(){

    return(
        <>

        <div className="w-full h-auto bg-slate-600 shadow-lg">

        <div className=" w-full h-[400px]  justify-around   flex items-center  overflow-hidden bg-slate-900 border-2 shadow-lg mt-3 rounded-lg  "> 
            <img className="w-[500px] h-[300px]" src="https://media.istockphoto.com/id/2165462299/photo/woman-shopping-at-a-convenience-store-and-checking-her-receipt.webp?a=1&b=1&s=612x612&w=0&k=20&c=-uU4ucwnLidAij8owVSlCBnJNs5fY7XDKqUBY6iBzX8=" alt="Grocery Images "></img>
            <img className="w-[500px] h-[300px]" src="https://images.unsplash.com/photo-1601599561096-f87c95fff1e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJtYXJrZXR8ZW58MHx8MHx8fDA%3D" alt="Grocery Images "></img> </div>
            <div className=" cursor-pointer text-center text-3xl p-4 text-red-600 font-serif font-bold bg-slate-800"> Current Status is : <span className=" font-mono p-3 text-4xl font-bold  text-orange-600 hover:underline"> Landing page</span></div>
            </div>
        </>
    )
}

export default Landing