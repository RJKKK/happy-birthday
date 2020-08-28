import {getUsersList} from "../api";
import React,{useEffect,useState} from 'react'

export function UseUserList(form) {
    const [usersList,setUsersList] = useState([])
    useEffect( ()=>{
        getUsersList(form).then(res=>{
            if(res.err!==0) return React.$message.error(res.msg)
            else setUsersList(res.data.list.map((val,index)=>{
                return{
                    key:index,
                    ...val
                }
            }))
        })
        return ()=> {setUsersList([])};
    },[form])
    return usersList
}
