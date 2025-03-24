import request from '../utils/requester.js'
import useAuth from '../hooks/useAuth.js'
import { UserContext } from '../contexts/UserContext.js'

const baseUrl = 'http://localhost:3030/data/games'

export default {
 
    // Create
   

    // GetAll

     async getAll(){
            const result = await request.get(baseUrl);
    
            const games = Object.values(result);
    
            console.log('Games are:', games)
    
            return games;
        },

        // GetById

         async getById(gameId){
            
                const game = await request.get(`${baseUrl}/${gameId}`)
                console.log("Game is:", game)
                return game
        
            },

        // Delete game

        async deleteGame(gameId){
        
                return request.delete(`${baseUrl}/${gameId}`)
         },

       // Edit game
       
       async editGame(gameId,payload){
       
               return request.put(`${baseUrl}/${gameId}`,{...payload,id:gameId});
               // we spread the properties of payload object into a new object
               // we add a new property id with the value of gameId to the same object
           }


}

export const useCreateGame = () => {

    const { request } = useAuth()

    const create = (gameData) => 

          request.post(baseUrl,gameData)
      //console.log('Fetched data is:', fetchData)

      return {
                 create
             }
    
  
}

export const useEditGame = () => {
    const { request } = useAuth();

    const edit = (gameId,gameData) => {

        return request.put(`${baseUrl}/${gameId}`, {...gameData,_id: gameId})
    
    }
        
}