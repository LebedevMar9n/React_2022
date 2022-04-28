import React, { useReducer, useState } from 'react'
import css from './Counter/CatDog.module.css'

function CatDog() {

    const reducer = (state, action) => {
        const { type, payload } = action

        switch (type) {
            case 'addCat':
                return { ...state, cats: [...state.cats, { name: payload, id: Date.now() }] }
            case 'deleteCat':
                return { ...state, cats: state.cats.filter(cat => cat.id !== payload) }
            case 'addDog':
                return { ...state, dogs: [...state.dogs, { name: payload, id: Date.now() }] }
            case 'deleteDog':
                return { ...state, dogs: state.dogs.filter(dog => dog.id !== payload) }

            default: return state
        }
    }
    const [state, dispatch] = useReducer(reducer, { cats: [], dogs: [] })

    const [catValue, setCatValue] = useState('')
    const [dogValue, setDogValue] = useState('')
    // const createCat = () => {
    //     dispatch({ type: 'addCat', payload: catValue })
    //     setCatValue('')
    // }
    const deleteCat = (id) => {
        dispatch({ type: 'deleteCat', payload: id })
    }
    const createDog = () => {
        dispatch({ type: 'addDog', payload: dogValue })
        setDogValue('')
    }
    const deleteDog = (id) => {
        dispatch({ type: 'deleteDog', payload: id })
    }
    const create=(type,payload)=>{
        dispatch({ type, payload})
            setCatValue('')
    }
    return (
        <div>
            <div className={css.header}>
                <div>
                    <label>Cat name:    <input type="text" onChange={({ target }) => { setCatValue(target.value) }} value={catValue} /></label>
                    <button onClick={() => create('addCat',catValue)}>Save</button>
                </div>
                <div>
                    <label>Dog name:    <input type="text" onChange={({ target }) => { setDogValue(target.value) }} value={dogValue} /></label>
                    <button onClick={() => createDog()}>Save</button>
                </div>
            </div>

            <br />
            <div className={css.header}>
                <div>
                    {
                        state.cats.map(cat => (
                            < div key={cat.id} >
                                {cat.name}
                                <button onClick={() => deleteCat(cat.id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        state.dogs.map(dog => (
                            < div key={dog.id} >
                                {dog.name}
                                <button onClick={() => deleteDog(dog.id)}>Delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div >
    )
}

export { CatDog }