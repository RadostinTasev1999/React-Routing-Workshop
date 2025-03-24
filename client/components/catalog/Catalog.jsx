import { useEffect,useState } from "react"
import gameApi from "../../src/api/gameApi";
//import { request } from "../../src/utils/requester";
import CatalogItem from "../catalog-item/CatalogItem";

// const baseUrl = 'http://localhost:3030/data/games'

export default function Catalog(){

    const [games,setGames] = useState([]);

    useEffect(() => {

        const response = gameApi.getAll() 
              response.then((games) => {
                setGames(games)
              })
    },[])



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