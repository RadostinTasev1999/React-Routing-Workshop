//import { useNavigate } from "react-router"

export default function CreateComment(
    {onCreate}
){
    //const navigate = useNavigate();

    const commentAction = async(formData) => {
        
        const comment = formData.get('comment')


        onCreate(comment);

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