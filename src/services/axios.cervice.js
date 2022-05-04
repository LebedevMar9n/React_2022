const { default: axios } = require("axios");

const { baseURL } = require("../constants/urls");


const axiosService=axios.create({baseURL:baseURL})


export {axiosService}