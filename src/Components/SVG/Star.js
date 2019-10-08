import React, {useState, useCallback} from "react"

const fill = "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
const outline = "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"

function Star(props){
  return (
  <div className="starAction" onClick={()=> props.updateFilled(!props.filled) }>
    <svg width="24" height="24" viewBox="0 0 24 24">
        <path 
         fill={ props.filled ? "#3F51B5" : "rgba(255,255,255,0.8)" }
         d={ props.filled ? fill : outline } />
    </svg>
  </div>)
}

export function UseStar({prefill = false}){
  const [filled, setFilled] = useState(prefill);

  const _updateFilled = useCallback((updated)=>{
        setFilled(updated)
  })
  
  return <Star filled={filled} updateFilled={_updateFilled} />;
}