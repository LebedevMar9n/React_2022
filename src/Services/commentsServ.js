import {constants} from '../Constants/constants.js'

export const CommentsService={
    getAllComments:()=>fetch(constants.apiUrl+'comments').then(value=>value.json()).then(value=>value.slice(0,10))
}