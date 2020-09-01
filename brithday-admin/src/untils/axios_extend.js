import Axios from 'axios'
import { message } from 'antd';
const CancelToken = Axios.CancelToken;
const source = CancelToken.source();
const request = Axios.create({
    baseURL:'',
    timeout:5000,
    withCredentials:true,
    cancelToken: source.token
})
//发送前的拦截器
// request.interceptors.request.use(config=>{
//
// })
//返回时的拦截器
// request.interceptors.response.use(res=>{
//
// })
const get = (url,data=null)=>{
    return  request.get(url,{params:data}).catch(err=>message.error(err.toString(),3))
}
const post = (url,data=null,params=null)=>{
    return  request.post(url,data,{params}).catch(err=>message.error(err.toString(),3))
}
export {get,post}
