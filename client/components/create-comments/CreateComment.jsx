import commentService from "../../src/services/commentService"

import { useNavigate } from "react-router"

export default function CreateComment(
    {email, gameId}
){
    const navigate = useNavigate();

    const commentAction = async(formData) => {
        
        const comment = formData.get('comment')

        const create = await commentService.create(email,gameId,comment)

        console.log('Comment Created:', create)

        navigate(`/games/${gameId}/details`)

        
    }

    return (
        <>
        <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" action={commentAction}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article>
        </>
    )
}