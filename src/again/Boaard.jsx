import React,{useState} from 'react'
import Squaree from './Squaree'
import './Apps.css'



export default function Boaard() {
  const [isXturn, setisXturn]= useState(true);
  const [state, setstate]= useState(Array(9).fill(null));
  console.log(state);

  
function isWinner(){
  const possibillity=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];
       for(const winner of possibillity){
    const [a,b,c]= winner;
    if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
       console.log(state[a])
       
    return state[a];
  }
  }
  return false;
}

  function handelclick(index){
  if(state[index]!==null){
    return;
  }
    const copy=[...state];
    copy[index]= isXturn? "X": "Y";
    setisXturn(!isXturn);
    setstate(copy);
    
   
  }
  const winner= isWinner();
 
  return (
    <div className='Boaard'>
    {winner ?<>{winner} won the game<button onClick={()=> setstate(Array(9).fill(null))}>Play again</button></> : <>
      <div className="row">
      <Squaree onclick={()=>handelclick(0)} value={state[0]}/>
      <Squaree onclick={()=>handelclick(1)} value={state[1]}/>
      <Squaree onclick={()=>handelclick(2)} value={state[2]}/>
      </div>
      <div className="row">
          <Squaree onclick={()=>handelclick(3)} value={state[3]}/>
          <Squaree onclick={()=>handelclick(4)} value={state[4]}/>
          <Squaree onclick={()=>handelclick(5)} value={state[5]}/>
      </div>
      <div className="row">
          <Squaree onclick={()=>handelclick(6)} value={state[6]}/>
          <Squaree onclick={()=>handelclick(7)}value={state[7]}/>
          <Squaree onclick={()=>handelclick(8)} value={state[8]}/>
      </div> </>}

    </div>
  )
}
