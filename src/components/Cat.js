import React from 'react'
import { useDispatch } from 'react-redux'

import { catActions } from '../redux/slices/cat.slice'

function Cat({cat}) {
 const dispatch=useDispatch()
  return (
    <div>
       {cat.id}--{cat.name}
       <button onClick={()=>dispatch(catActions.deleteCat({id:cat.id}))}>Delete</button>
       <button onClick={()=>dispatch(catActions.setCatForUpdate({cat}))}>Update</button>
    </div>
  )
}

export  {Cat}