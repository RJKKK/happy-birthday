import {post,get} from '../untils/axios_extend'
//获取用户列表
export const  getUsersList = async()=>{
    const res = await get('/admin/getUsersList')
    return res.data
}