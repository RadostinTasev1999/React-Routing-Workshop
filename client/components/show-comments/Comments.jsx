import styles from './CommentsShow.module.css'

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
                            comments && comments.length > 0
                                
                            ?

                        comments.map(({_id,_ownerId,comment,pending}) => (
                    <li key={_id} className={`comment ${pending ? styles['comment-pending'] : ''}`.trim()}>
                        <p>{_ownerId}:{comment}</p>
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