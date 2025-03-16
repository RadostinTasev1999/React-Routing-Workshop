import request from '../utils/requester'

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export default {
   async create(email,gameId,comment) {

        console.log('Comment email is:', email)
    
        const createComment = await request.post(baseUrl,{ email,gameId, comment})

        console.log("Created comment:", createComment)

        return createComment
    }
}
