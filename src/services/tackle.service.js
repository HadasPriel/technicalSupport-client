import Axios from 'axios'


export const tackleService = {
    query,
    add
}

const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'


var axios = Axios.create({
    withCredentials: true
})


async function query() {
    const url = `${BASE_URL}tackle`
    try {
        return await axios.get(url)
            .then((res) => {
                console.log(res.data);
                return res.data
            })
    } catch (err) {
        console.log(err);
    }
}

async function add(userInput) {
    const url = `${BASE_URL}tackle`
    try {
        return await axios.post(url, userInput)
            .then((res) => res.data)
    } catch (err) {
        console.log(err);
    }
}