//import { useEffect } from "react"
import { useNavigate, useParams } from "react-router"
//import { useState } from "react"
//import { UserContext } from "../../src/contexts/UserContext"

import { Link } from "react-router"
// import { request } from "../../src/utils/requester"
import { useGame } from "../../src/api/gameApi"

import Comments from "../show-comments/Comments"
import CreateComment from "../create-comments/CreateComment"
//import commentService from "../../src/services/commentService"
import { useDeleteGame } from "../../src/api/gameApi"
import useAuth from "../../src/hooks/useAuth"
import { useComments } from "../../src/api/commentApi"
//import { UserContext } from "../../src/contexts/UserContext"

export default function GameDetails(){

    

    const { email, _id: userId } = useAuth()

    const { gameId } = useParams()
    const navigate = useNavigate()

    //! by useParams() we acess the parameters of the current route to 
    //!                manage the dynamic routes in the URL.
    const { game } = useGame(gameId)
    const { deleteGame } = useDeleteGame()
    const { comments } = useComments(gameId)
    
   console.log('Edited game is:', game)

 

    const onDelete = async() => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${game.title} game?`)
        //! the confirm method takes in a message parameter that will be
        //! displayed in a pop-up window at the current location.
            if (!hasConfirmed) {
                    return;
            }

           await deleteGame(gameId)

            navigate('/')


    };

  

    const commentCreateHandler = (createdComment) => {
         setComments(state => [...state, createdComment])
    };


    const isOwner = userId === game._ownerId

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

                
                <Comments comments={comments}/>

                
                { isOwner && (
                <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <button onClick={onDelete} className="button">Delete</button>
                </div>
                )}
                
                 </div>

                 <CreateComment 
                 email={email} 
                 gameId={gameId}
                 onCreate={commentCreateHandler}
                 />

            
            
            

        </section>
        </>
    )
}