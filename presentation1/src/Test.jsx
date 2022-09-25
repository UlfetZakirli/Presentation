import React, { useCallback, useMemo } from 'react'

const Test = () => {
    
  //useMemo
const x=3
const result=useMemo(()=>x+22,[x])
console.log(result);

//useCallback
const y=3
const result2=useCallback(()=>y+6,[y])
console.log(result2);





  return (
    <div><h1>Test</h1></div>
  )
}

export default Test