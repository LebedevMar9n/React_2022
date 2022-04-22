import { axiosService } from "./axios.service";
import { urls } from "../constants/urls";

const commentsService={
    getAll:()=>axiosService.get(`${urls.comments}`),
    getById:(id)=>axiosService.get(`${urls.comments}/${id}`),
    getByPostId:(id)=>axiosService.get(`${urls.posts}/${id}/comments`)
}

export {commentsService}