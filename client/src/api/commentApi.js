import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export default {
    async getAll(gameId) {
       
    },

    create() {

    }
}

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