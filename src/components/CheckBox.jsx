import React, { useState } from 'react'
// 
// 

const CheckBox = ({done, handleIsComplete , idx}) => {

    // const [isComplete, setIsComplete] = useState(done); 

  return (
    <div 
    onClick={() => {
      handleIsComplete(idx);
      // setIsComplete(!isComplete);  
      // console.log("modified in frontend")
    }}
    >
        {done ?<i className="fa-solid fa-square-check" id = 'check'></i> : <i className="fa-regular fa-square"></i> }
    </div>
  )
}

export default CheckBox