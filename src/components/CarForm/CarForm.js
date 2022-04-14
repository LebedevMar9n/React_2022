import React from 'react'
import { useForm } from 'react-hook-form'

const CarForm=()=> {
    const {register,reset,handleSubmit}=useForm()
    const submit=(data)=>{
        console.log(data);
    }
    return (
    <form onSubmit={handleSubmit(submit)}>
        <div><label>Price:<input type="text" {...register('price')}/></label></div>
        <div><label>Model:<input type="text" {...register('model',{valueAsNumber:true})}/></label></div>
        <div><label>Year:<input type="text" {...register('year',{valueAsNumber:true})}/></label></div>
        <button>SAVE</button>
    </form>
  )
}
export {CarForm}