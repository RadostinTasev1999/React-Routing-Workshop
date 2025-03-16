import commentService from "../../src/services/commentService"

import { useNavigate } from "react-router"

export default function CreateComment(
    {email, gameId,onCreate}
){
    const navigate = useNavigate();

    const commentAction = async(formData) => {
        
        const comment = formData.get('comment')

        const createdComment = await commentService.create(email,gameId,comment)

        console.log('Comment Created:', createdComment)

        onCreate(createdComment);

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