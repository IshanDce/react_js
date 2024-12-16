import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]= useState(10)
  const value=()=>{
    console.log("number is added",counter)
    setcounter(counter+1)
    if(counter>=15){
      setcounter(0);
    }
  }
  const values=()=>{
   
    console.log("number is removed",{counter})
    setcounter(counter-1)
    if(counter<=0){
      setcounter(15);
    }
  }
  
  
  
  
  return (
    <>
      <h1>COUNTER PROJECT </h1>
      <h2> Counter value:{counter}</h2>
      <button onClick={value} >Add values</button>
      <button onClick={values}>remove values</button>
    </>
  )
}

export default App
