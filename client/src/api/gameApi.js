import request from '../utils/requester.js'
import useAuth from '../hooks/useAuth.js'
//import { UserContext } from '../contexts/UserContext.js'
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
export const useGames = () => {

    //const { request } = useAuth()
    const [games,setGames] = useState([]);

    // new URLSearchParams()
    useEffect(() => {
        // const searchParams = new URLSearchParams({
        //     sortBy: '_createdOn desc',
        //     pageSize: 2
        // })
        request.get(`${baseUrl}`)
            .then((response) => {
                console.log('Games are:', response)
                setGames(response)
            })
    },[])
        
    
    return {
             games
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

    const edit = (gameId,gameData) => 

         request.put(`${baseUrl}/${gameId}`, {...gameData,_id: gameId})
    
        return {
            edit
        }
    
        
}

export const useDeleteGame = () => {
    const { request } = useAuth();

    const deleteGame = async(gameId) => 

       await request.delete(`${baseUrl}/${gameId}`);
        /*
        When we invoke request.delete(), we make a call to the
        requestWrapper function with the HTTP method set to "DELETE"
        */

    return {
        deleteGame
    }

}