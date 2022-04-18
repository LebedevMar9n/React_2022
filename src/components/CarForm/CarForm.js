import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { joiResolver } from "@hookform/resolvers/joi"

import { carService } from '../../services/index.js'
import { carValidator } from '../../validators'

const CarForm = ({ setNewCar, carForUpdate }) => {
    const { register, reset, handleSubmit, formState: { errors }, setValue } = useForm({ resolver: joiResolver(carValidator), mode: 'onTouched' })
    // const [errorForm, setErrorForm] = useState({})
    useEffect(() => {
        if (carForUpdate) {
            const { model, price, year } = carForUpdate;
            setValue('model', model)
            setValue('price', price)
            setValue('year', year)
        }
    }, [carForUpdate]);

    const submit = async (car) => {
        try {
            if (carForUpdate) {
                const { data } = await carService.updateById(carForUpdate.id, car)
                setNewCar(data)

            } else {
                const { data } = await carService.create(car)
                setNewCar(data)
            }
            reset()
        } catch (error) {
            // setErrorForm(error.response.data)
        }

    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label>Model:<input type="text" {...register('model')} /></label></div>
            {errors.model && <span>{errors.model.message}</span>}            {/* {errorForm.model && <span>{errorForm.model[0]}</span>} */}
            <div><label>Price:<input type="text" {...register('price', { valueAsNumber: true })} /></label></div>
            {errors.price && <span>{errors.price.message}</span>}
            {/* {errorForm.price && <span>{errorForm.price[0]}</span>} */}
            <div><label>Year:<input type="text" {...register('year', { valueAsNumber: true })} /></label></div>
            {errors.year && <span>{errors.year.message}</span>}
            {/* {errorForm.year && <span>{errorForm.year[0]}</span>} */}
            <br />
            <button>{carForUpdate ? 'Update' : 'Save'}</button>
            { !!carForUpdate && <button onClick={()=>{reset()}}>Clear form</button>}
        </form>
    )
}
export { CarForm }