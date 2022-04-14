import React from 'react'

 function Car({car}) {
     const {id,model,year,price}=car
  return (
    <div>
        <div>id:{id}</div>
        <div>model:{model}</div>
        <div>price:{price}</div>
        <div>year:{year}</div>
    </div>
  )
}
export {Car}