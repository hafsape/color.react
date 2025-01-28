import { useState } from 'react'
import './App.css'

function App() {
 
   const [clr,setClr]=useState("black")
   
  return (
    <>
    
    <div  style={{height:"100vh",backgroundColor:clr} }className='d-flex flex-column text-light align-items-center justify-content-center'>
      <h1>Background Changing App</h1>
      <div style={{backgroundColor:"white",height:"55px",borderRadius:"20px"}} className='d-flex mt-5  align-items-center justify-content-center' >
         <button onClick={()=>setClr("red")} className='btn btn-danger' >red</button>
         <button onClick={()=>setClr("orange")} className='btn btn-warning' >orange</button>
         <button onClick={()=>setClr("blue")} className='btn btn-info'>blue</button>
         <button onClick={()=>setClr("green")} className='btn btn-success'>green</button>
         <button onClick={()=>setClr("grey")} className='btn btn-secondary'>grey</button>
      </div>
    </div>
    </>
  )
}

export default App
