import axios from 'axios'
const baseUrl = 'http://localhost:3003/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    console.log(request);
    return request.then(response=> response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request
}

export default { 
    getAll: getAll, 
    create: create, 
    update: update 
}