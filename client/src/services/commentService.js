import request from '../utils/requester'

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export default {

   async create(email,gameId,comment) {

        console.log('Comment email is:', email)
    
        const createComment = await request.post(baseUrl,{ email,gameId, comment})

        console.log("Created comment:", createComment)

        return createComment
    },

    async getAll(gameId){

        const comments = await request.get(baseUrl)
        console.log('Game comments are:', Object.values(comments))

        const filteredComments = Object.values(comments).filter(comment => comment.gameId === gameId)

        console.log('Filtered comments are:',filteredComments)

        return filteredComments;
    }
}