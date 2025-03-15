import { useEffect,useState } from "react"
import gameService from "../../src/services/gameService";

export default function Catalog(){

    const [games,setGames] = useState([]);

    useEffect(() => {

     gameService.getAll()
        .then((result) => {
            setGames(result)
        })

        // console.log('Games are:', games)

    })



    return (
       
        <section id="catalog-page">
            <h1>All Games</h1>
            {
               games.map((game) => (
                   <div className="allGames">
                       <div className="allGames-info">
                           <img src={game.imageUrl} />
                           <h6>{game.category}</h6>
                           <h2>{game.title}</h2>
                           <a href="#" className="details-button">Details</a>
                       </div>

                   </div>
               ))
            }
           
            
            <h3 className="no-articles">No articles yet</h3>
        </section>
    )
}