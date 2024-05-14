import { useEffect, useState } from "react";

function Clock() {
  const [seconds, setSeconds] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [hourse,setHourses] = useState(0);
  const [toggle,setToggle] = useState(false)
let timer ;

function start(){
  setToggle(!toggle)
}


  useEffect(()=>{
    if(toggle===true){
    timer = setInterval(()=>{
      setSeconds(seconds+1)
        if(seconds === 59){
          setMinutes(minutes+1)
          setSeconds(0)
        }
        else if(minutes === 59){
          setHourses(hourse+1)
          setMinutes(0)
        }
  
    },1000)
    
    
    return ()=> clearInterval(timer)
  }
      })


function stop(){
  clearInterval(timer)
  setToggle(false)

}
function reset(){
  setSeconds(0);
  setMinutes(0);
  setHourses(0);
  setToggle(false)

}


 
  return (
    <>
    <div className="bg-zinc-600 lg:w-1/2 md:w-2/3 sm:w-2/3 lg:ml-72 md:ml-32 sm:ml-28 mt-10 rounded shadow-sm shadow-black">
      <h1 className="text-white pt-10 font-mono text-2xl lg:ml-56 md:ml-48 sm:ml-44">Simple Clock</h1>
        <h1 className="text-red-400 sm:pl-24 md:pl-36 md:ml-1 lg:pl-40 pt-14 pb-14 ml-16 inline-block font-mono font-semibold text-6xl lg:ml-6 -mt-10 sm:ml-8">
          {hourse<10?"0"+hourse:hourse}:{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}
        </h1>
        <div className="flex justify-between lg:ml-40 md:ml-36 sm:ml-20  md:ml-32  text-xl -mt-10 pb-10">
          <button
            className="bg-green-600 text-yellow-300 font-semibold px-5 py-1 rounded cursor-pointer ml-14 lg:ml-2 md:ml-2"
           onClick={start} 
          >
            Start
          </button>
          <button
            className="lg:-ml-44 sm:ml-1 bg-green-600  text-yellow-300 font-semibold px-5 rounded cursor-pointer -ml-1"
            onClick={stop}
          >
            Stop
          </button>
          <button className="bg-green-600  text-yellow-300 font-semibold px-4 lg:-ml-44 sm:ml-1 md:mr-56 lg:mr-40  sm:mr-40 rounded cursor-pointer mr-20" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
     
    </>
  );
}
export default Clock;
