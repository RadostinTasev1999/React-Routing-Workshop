import { useNavigate } from "react-router"
import gameService from "../../src/services/gameService"



export default function Create(){

    const navigate = useNavigate();

    const submitAction = async(formData) => {
        //console.log('Form Data is:', formData)

       // const data = Object.fromEntries(formData)

        // console.log('Object fromEntries',data)

       // const {category, imageUrl, maxLevel, summary, title } = Object.fromEntries(formData)

      //  console.log('Desctructured data is:', category,imageUrl,maxLevel,summary,title)

        const gameData = Object.fromEntries(formData)

        const response = await gameService.create(gameData)

        navigate('/games')
        
        console.log('Result is:', response)
        


    }


    return (
        <>
        <section id="create-page" className="auth">
            <form action={submitAction} id="create">
                <div className="container">

                    <h1>Create Game</h1>
                    <label for="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter game title..."/>

                    <label for="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter game category..."/>

                    <label for="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"/>

                    <label for="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>

                    <label for="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game"/>
                </div>
            </form>
        </section>
        </>
    )
}