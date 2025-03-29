// import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import gameService from "../../src/services/gameService";
import { useNavigate, Navigate } from "react-router";
import { useEditGame,useGame } from "../../src/api/gameApi";
import useAuth from "../../src/hooks/useAuth";

export default function Edit(){

    const { userId } = useAuth();
    const {gameId} = useParams()
    // const [game,setGame] = useState({})
    const navigate = useNavigate()
    const { edit } = useEditGame()
    const { game } = useGame(gameId)

  

    const onSubmit = async(formData) => {

       const defaultValues = Object.fromEntries(formData)

       console.log('Edit form defaultValues are:', defaultValues)

       const editedGame =  await edit(gameId,defaultValues)
       
       console.log("Edited game is:", editedGame)

       navigate(`/games/${gameId}/details`)

    }

    console.log('Game is', game)

    const isOwner = userId === game._ownerId;
    // if the userId from the logged in user matches the current game Id,
    // isOwner will be true

    if (!isOwner) {
        return <Navigate to="/games" />
    }
       

    return (
        <>
        <section id="edit-page" className="auth">
            <form action={onSubmit} id="edit">
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title}/>

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" defaultValue={game.category}/>

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" defaultValue={game.maxLevel}/>

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" defaultValue={game.imageUrl}/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary}></textarea>
                    <input className="btn submit" type="submit" defaultValue="Edit Game"/>

                </div>
            </form>
        </section>
        </>
    )
}