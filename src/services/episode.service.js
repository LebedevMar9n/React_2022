import { urls } from "../constants/urls/urls";
import { axiosService } from "./axios.service";

const episodeService={
    getAll:(page=1)=>axiosService.get(urls.episode,{params:{page}})
}

export {episodeService}