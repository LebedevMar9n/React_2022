import { axiosService } from "./axios.service";
import { urls } from "../constants/urls";

const userService={
    getAll:()=>axiosService.get(`${urls.users}`),
    getById:(id)=>axiosService.get(`${urls.users}/${id}`)
}

export {userService}