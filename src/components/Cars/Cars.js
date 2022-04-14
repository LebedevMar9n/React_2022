import {useState,useEffect} from 'react';

import {carService} from '../../services/index.js'
import {Car} from '../index.js'
 

function Cars() {
    const [cars, setCars] = useState([])
    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [])
    
  return (
    <div>
        {cars.map(car=><Car key={car.id} car={car}/>)}
    </div>
  )
}
export {Cars}