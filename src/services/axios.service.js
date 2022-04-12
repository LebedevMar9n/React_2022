import axios from 'axios'
import {baseURL} from '../constants/index'

const axiosService=axios.create({baseURL})

export {axiosService}