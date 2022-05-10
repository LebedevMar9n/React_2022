import { urls } from "../constants/urls";
import { axiosService } from "./axios.cervice";

const carService={
    getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars,car),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`),
    upadateById:(id,car)=>axiosService.put(`${urls.cars}/${id}`,car)
}

export {carService}