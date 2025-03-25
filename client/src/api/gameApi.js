import request from '../utils/requester.js'
import useAuth from '../hooks/useAuth.js'
import { UserContext } from '../contexts/UserContext.js'
import { useEffect,useState } from 'react'

const baseUrl = 'http://localhost:3030/data/games'

export const useGame = (gameId) => {

    const [game,setGame] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${gameId}`) 
            .then((game) => setGame(game))
    },[gameId])

    return {
        game
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

    const edit = async(gameId,gameData) => 

        await request.put(`${baseUrl}/${gameId}`, {...gameData,_id: gameId})
    
        return {
            edit
        }
    
        
}

export const useDeleteGame = () => {
    const { request } = useAuth();

    const deleteGame = (gameId) => 

        request.delete(`${baseUrl}/${gameId}`);

    return {
        deleteGame
    }

}