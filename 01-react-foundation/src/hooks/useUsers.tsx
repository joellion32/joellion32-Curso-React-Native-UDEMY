/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import type { ReqResListResponse, User } from "../interfaces"


const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios.get<ReqResListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        });
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}


export const userUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const currentPageRef = useRef(1);

    useEffect(() => {
        loadUsers(currentPageRef.current)
            .then(setUsers)
    }, [])

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current);

        if (users.length > 0) {
            setUsers(users)
        } else {
            currentPageRef.current--;
        }

        loadUsers(currentPageRef.current);
    }

    const prevPage = async () => {
        if (currentPageRef.current < 1) return;

        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users);
    }

    return {
        // Properties 
        users,

        // Methods 
        nextPage,
        prevPage
    }
}