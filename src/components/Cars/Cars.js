import {useState,useEffect} from 'react';

import {carService} from '../../services/index.js'
import {Car} from '../index.js'
 

function Cars({newCar,setCarForUpdate}) {
    const [cars, setCars] = useState([])
    const [deleteCarById, setDeleteCarById] = useState(null)
    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [newCar,deleteCarById])
    // useEffect(()=>{
// if(newCar){
//   setCars([...cars,newCar])
// }
//     },[newCar])
    
  return (
    <div>
        {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setDeleteCarById={setDeleteCarById}/>)}
    </div>
  )
}
export {Cars}