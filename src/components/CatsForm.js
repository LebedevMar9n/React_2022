import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { catActions } from '../redux/slices/cat.slice'

function CatsForm() {
    const [name, setName] = useState('')

    const dispatch = useDispatch()
    const { catForUpdate } = useSelector(({ cats }) => cats)

    useEffect(() => {
        if (catForUpdate) {
            setName(catForUpdate.name)
        }
    }, [catForUpdate])


    const save = () => {
        if (catForUpdate) {
            dispatch(catActions.updateCat({ name ,id:catForUpdate.id}))
        } else {
            dispatch(catActions.addCat({ name }))
        }
        setName('')
    }
    return (
        <div>
            <label >Cat name:
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </label>
            <button onClick={save}>{catForUpdate?'Update':'Create'}</button>
        </div>
    )
}

export { CatsForm }