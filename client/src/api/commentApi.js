import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const useComments = (gameId) => {
    const { request } = useAuth();
    const [comments,setComments] = useState([])

    useEffect(() => {
        /*
         find all comments with matching field gameId
        */
        const searchParams = new URLSearchParams({
            where: `gameId="${gameId}"`
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then((response) => {
                setComments(response)
            })
    },[request,gameId])

    return {
        comments
    }

}

export const useCreateComment = () => { 

    const { request } = useAuth()

    const create = (gameId, comment) => {

        const commentData = {
            gameId,
            comment
        };

    
        return request.post(baseUrl, commentData)
    }

    return {
        create
    }
}