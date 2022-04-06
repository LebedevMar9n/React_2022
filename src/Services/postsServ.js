import {constants} from '../Constants/constants.js'

export const PostsService={
    getAllPosts:()=>fetch(constants.apiUrl+'posts').then(value=>value.json()).then(value=>value.slice(0,10))
}