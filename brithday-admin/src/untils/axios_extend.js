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
// request.interceptors.request.use(config=>{
//
// })
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
