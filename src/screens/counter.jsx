import React,{useState, useEffect, useRef} from "react";




const Counter =  () =>{
    const [count, setCount] = useState(0);
    const incrementCount = () =>{
        setCount(count+1);
    }
const reset = () =>{
    setCount(0);
}    
    return(

    
<div className="p-5 w-100 h-screen bg-slate-900 flex jusify-center
 items-center">
 <div className="w-[80%] h-auto flex flex-col">
    <h1 className="text-sky-400 text-[4rem]">
        Counter Component
    </h1>
    <p className="text-[3rem] text-white">{count}</p>
    <button 
    onClick={incrementCount}
    className="bg-green-600 w-[200px] rounded-md py-4 text-white text-[1.5rem]">Count</button>
     <button 
    onClick={reset}
    className="bg-red-600 w-[200px] mt-3 rounded-md py-4 text-white text-[1.5rem]">Resett</button>
    </div>   
</div>   
    ); 
}
 


export default Counter;