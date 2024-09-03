import  { useState } from 'react'

function App() {
  const[colour,setColour] =  useState("Black")
  return (
    
       <div className='w-full h-screen duration-200 ' style={{backgroundColor:colour}}>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
            <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button onClick={()=>setColour("red")} className=' outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{background: "red"}}>red</button>
              <button onClick={()=>setColour("blue")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{background: "blue"}}>blue</button>
              <button onClick={()=>setColour("green")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{background: "green"}}>green</button>
              <button onClick={()=>setColour("yellow")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{background: "yellow"}}>yellow</button>
              <button onClick={()=>setColour("purple")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{background: "purple"}}>purple</button>
              <button onClick={()=>setColour("pink")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{background: "pink"}}>pink</button>
              <button onClick={()=>setColour("orange")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{background: "orange"}}>orange</button>
              <button onClick={()=>setColour("brown")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{background: "brown"}}>brown</button>
              <button onClick={()=>setColour("teal")} className='outline-none px-4 py-1 rounded-full shadow-lg text-white' style={{background: "teal"}}>teal</button>
              <button onClick={()=>setColour("white")} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{background: "white"}}>white</button>
             
            </div>
          </div>
       </div>
  
  )
}

export default App