import { useEffect,useState } from "react"
import gameApi from "../../src/api/gameApi";
import CatalogItem from "../catalog-item/CatalogItem";


export default function Catalog(){

    const [games,setGames] = useState([]);

    useEffect(() => {

     gameApi.getAll()
        .then((result) => {
            console.log('Result in getAll then handler is:', result)
            setGames(result)
        })

        .catch((error) => {
            console.error('Error fetching games:', error)
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