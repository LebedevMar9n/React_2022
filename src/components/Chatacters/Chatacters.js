import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { characterService } from '../../services'
import { Character } from '../Character/Character'

function Chatacters() {
    const [characters, setCharacters] = useState([])
    const { state } = useLocation()
    useEffect(() => {
        characterService.getByCharacterList(state).then(({ data }) => setCharacters(data))
    }, [])

    return (
        <div>
            {characters.map(i => <Character key={i.id} character={i} />)}
        </div>
    )
}

export { Chatacters }