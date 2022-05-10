import React from 'react'
import { useDispatch } from 'react-redux'

import { carActions } from '../../redux/slices/car.slice'

function Car({ car,car: { id, model, price, year } }) {
  const dispatch = useDispatch()
  const deleteById = () => {
    dispatch(carActions.deleteById({ id }))
  };
  const update = () => {
    dispatch(carActions.setCarForUpdate({ id,car }))
  }
  return (
    <div>
      {id}--{model}--{price}--{year}
      <button onClick={update}>Update</button>
      <button onClick={deleteById}>Delete</button>
    </div>
  )
}

export { Car }