import request from '../utils/requester.js'
 const baseUrl = 'http://localhost:3030/jsonstore/games'

export default {

    async create(data){

        return request.post(baseUrl,data)

        //const response = await request('POST',baseUrl,data)


    },

   async getAll(){
        const result = await request.get(baseUrl);

        const games = Object.values(result);

        console.log('Games are:', games)

        return games;
    },

    async getById(gameId){

        return request.get(`${baseUrl}/${gameId}`)

    },

    async deleteGame(gameId){

        return request.delete(`${baseUrl}/${gameId}`)
    },

    async editGame(gameId,payload){

        return request.put(`${baseUrl}/${gameId}`,{...payload,id:gameId});
        // we spread the properties of payload object into a new object
        // we add a new property id with the value of gameId to the same object
    }

}