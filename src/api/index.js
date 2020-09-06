import {post,get} from '../untils/axios_extend'
//获取用户列表
export const  getUsersList = async(data)=>{
    const res = await get('/admin/getUsersList',data)
    return res.data
}
//获取用户个人信息
export const  getUserDetail = async(data)=>{
    const res = await get('/admin/getUserDetail',data)
    return res.data
}
