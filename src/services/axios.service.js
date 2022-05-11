const { default: axios } = require("axios");

const { baseURL } = require("../constants/urls/urls");


const axiosService=axios.create({baseURL})


export {axiosService}