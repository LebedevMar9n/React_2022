import { urls } from "../constants/urls";
import { axiosService } from "./axios.cervice";

const carService={
    getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars,car)
}

export {carService}