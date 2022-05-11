import React from 'react'
import { useNavigate } from 'react-router-dom'
import css from './Episode.module.css'


function Episode({ episode: { name, air_date, episode,characters   } }) {
  const navigate=useNavigate()
  return (
    <div className={css.episode} onClick={()=>navigate('/characters',{state:characters})}>
      <h1>{name}</h1>
      <h2>{air_date}</h2>
      <h2>{episode}</h2>

    </div>
  )
}

export { Episode }