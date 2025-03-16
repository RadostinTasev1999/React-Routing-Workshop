export default function Comments(
    {comments}
) {

        console.log('Passed comments are:', comments)
    return (
        <>
            <div className="details-comments">
                <h2>Comments:</h2>
                <ul>
                    { 
                            comments.length > 0
                                ?

                        comments.map((el) => (
                    <li className="comment">
                        <p>{el.email + " " + el.comment}</p>
                    </li>
                        ))
                                :
                    <p className="no-comment">No comments.</p>
                    }
                </ul>
            </div>
        </>
    )
}