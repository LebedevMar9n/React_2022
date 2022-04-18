import React from 'react'
import { carService } from '../../services'

 function Car({car , setCarForUpdate}) {
     const {id,model,year,price}=car
     const deleteCar=async()=>{
       await carService.deleteById(id)
     }
  
  return (
    <div>
        <div>id:{id}</div>
        <div>model:{model}</div>
        <div>price:{price}</div>
        <div>year:{year}</div>
        <button onClick={()=>deleteCar()}>Delete</button>
        <button onClick={()=>setCarForUpdate(car)}>Upadate</button>
        <br/>
        <br/>
    </div>
  )
}
export {Car}