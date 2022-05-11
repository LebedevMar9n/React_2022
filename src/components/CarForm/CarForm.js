import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { carActions } from '../../redux/slices/car.slice'

function CarForm() {
  const { carForUpdate } = useSelector(state => state.cars)
  const { reset, register, handleSubmit, setValue } = useForm()
  const dispatch = useDispatch()
  useEffect(() => {
    if (carForUpdate) {
      const { model, price, year } = carForUpdate
      setValue('model', model)
      setValue('price', price)
      setValue('year', year)
    }
  }, [carForUpdate])


  const submit = async (newCar) => {
    if (carForUpdate) {
      await dispatch(carActions.updateById({ id: carForUpdate.id, car: newCar }))
    } else {
      await dispatch(carActions.create({ car: newCar }));
    }
    reset()
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div><label>model:<input type="text" {...register('model')} /></label></div>
      <div><label>price:<input type="text" {...register('price')} /></label></div>
      <div><label>year:<input type="text" {...register('year')} /></label></div>
      <button>Save</button>
    </form>
  )
}

export { CarForm }