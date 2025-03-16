import { useEffect,useState } from "react"
import gameService from "../../src/services/gameService";
import CatalogItem from "../catalog-item/CatalogItem";


export default function Catalog(){

    const [games,setGames] = useState([]);

    useEffect(() => {

     gameService.getAll()
        .then((result) => {
            setGames(result)
        })

         console.log('Games are:', games)

    })



    return (
       
        <section id="catalog-page">
            <h1>All Games</h1>
            {
                games.length > 0
                     ? 
                  games.map(game => (
                    <CatalogItem key={game._id} {...game}/>
                ))

                                 :

              <h3 className="no-articles">No articles yet</h3>
            }     
        </section>
    )
}