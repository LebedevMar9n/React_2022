import { urls } from "../constants/urls/urls";
import { axiosService } from "./axios.service";

const characterService = {
    getByCharacterList: (characters) => {
        const ids = characters.map(item => item.split('/').slice(-1)[0]).join(',');
        return axiosService.get(`${urls.character}/${ids}`)
    }
}

export {characterService}