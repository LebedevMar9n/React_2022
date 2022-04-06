import {constants} from '../Constants/constants.js'

export const UsersService={
    getAllUsers:()=>fetch(constants.apiUrl+'users').then(value=>value.json()).then(value=>value.slice(0,10))
}