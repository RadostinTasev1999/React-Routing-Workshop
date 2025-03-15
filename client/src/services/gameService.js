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
    }

}