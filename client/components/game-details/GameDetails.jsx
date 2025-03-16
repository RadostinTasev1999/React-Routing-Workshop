import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"
import { useState } from "react"

import { Link } from "react-router"
// import { request } from "../../src/utils/requester"
import gameService from "../../src/services/gameService"

import Comments from "../show-comments/Comments"

export default function GameDetails(){

    const { gameId } = useParams()
    const navigate = useNavigate()

    //! by useParams() we acess the parameters of the current route to 
    //!                manage the dynamic routes in the URL.

    const [game,setGame] = useState({})

    console.log('Game ID is:', gameId)

   

    useEffect(() => {

        //! immediately invoke async function expression:
        (async () => {
            const game = await gameService.getById(gameId)
            setGame(game);
        })();

       

    },[gameId])

    const onDelete = async() => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${game.title} game?`)
        //! the confirm method takes in a message parameter that will be
        //! displayed in a pop-up window at the current location.
            if (!hasConfirmed) {
                    return;
            }

            await gameService.deleteGame(gameId)

            navigate('/')


    };

    console.log("Game is:", game)



    return (
        <>
         <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                
                <Comments />

                
                <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <button onClick={onDelete} className="button">Delete</button>
                </div>
            </div>

            
            
            

        </section>
        </>
    )
}