import {getUsersList,getUserDetail} from "../api";
import React,{useEffect,useState} from 'react'
export function UseUserList(form) {
    const [usersList,setUsersList] = useState({})
    useEffect( ()=>{
        getUsersList(form).then(res=>{
            if(res.err!==0) return React.$message.error(res.msg)
            else setUsersList({
                total:res.data.total,
                list:res.data.list.map((val,index)=>{return{
                    key:index,
                    ...val
                }})

            })
        })
        return ()=> {setUsersList({
            total:0,
            list:[]
        })};
    },[form])
    return usersList
}
export function UseUserDetail(account) {
    const [userDetail,setUserDetail] = useState({})
    useEffect(()=>{
        (async()=>{
            const res = await getUserDetail({account})
            if(res.err!==0)  return React.$message.error(res.msg)
           else return setUserDetail(res.data)
        })()
        return ()=>setUserDetail({})
    },[])
    return [userDetail,setUserDetail]
}
