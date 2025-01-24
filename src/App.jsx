import { useState } from 'react'
import './App.css'

function App() {
 
   const [clr,setClr]=useState("#ffff")
   
  return (
    <>
    
    <div  style={{height:"100vh",backgroundColor:clr} }className='d-flex flex-column align-items-center justify-content-center'>
      <h1>Background Changing App</h1>
      <div className='d-flex  align-items-center justify-content-center' >
         <button onClick={()=>setClr("red")} className='btn btn-danger' >red</button>
         <button onClick={()=>setClr("orange")} className='btn btn-warning' >orange</button>
         <button onClick={()=>setClr("blue")} className='btn btn-info'>blue</button>
         <button onClick={()=>setClr("green")} className='btn btn-success'>green</button>
         <button onClick={()=>setClr("#ffff")} className='btn btn-light'>cancel</button>
      </div>
    </div>
    </>
  )
}

export default App
