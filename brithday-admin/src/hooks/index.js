import {getUsersList} from "../api";
import React,{useEffect,useState} from 'react'

export function UserList() {
    const [usersList,setUsersList] = useState([])
    useEffect( ()=>{
        getUsersList().then(res=>{
            if(res.err!==0) return React.$message.error(res.msg)
            else setUsersList(res.data.list)
        })
        return ()=> {setUsersList([])};
    },[])
    return usersList
}
