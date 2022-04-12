import React from 'react'

function User({user,getUserId,setUser,setUserId}) {
  const {id,name}=user
  const click=()=>{
    setUserId(false)
    setUser(user)
  }
  return (
    <div>
      {name}
      {/* <button onClick={()=>getUserId(id)} onCl>info</button> */}
      <button onClick={click}>info</button>
    </div>
  )
}
export {User}



