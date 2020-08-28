import React,{useState} from 'react';
import styled from "styled-components";
import {UseUserList} from '../hooks'
// import {MySearch} from '../components'
import { Input,Table  } from 'antd';
const { Search } = Input;
// import {myContext} from "../store"
const Style = styled('div')`

}
`;

export default function UsersAdmin () {
    // const {authState,authDispatch} = useContext(myContext)
    // const {accountDetailState, accountDetailDispatch} = useContext(myContext)
    const [form,setForm] = useState({
        keyWord:'',
        pageSize:8,
        index:1
    })
    let userList = UseUserList(form);
    const [columns,setColumns] = useState([
        {title:"姓名",dataIndex:'name',key:'name'},
        {title:"账号名称",dataIndex:'account',key:'account'},
        {title:"生日",dataIndex:'birthday',key:'birthday'},
        {title:"邮箱",dataIndex:'email',key:'email'},
        {title:"创建日期",dataIndex:'createTime',key:'createTime'},
    ])

    return(
        <Style>
            <Search
                placeholder="请输入关键字进行搜索"
                onSearch={() =>{ setForm({keyWord: '12'}); console.log(userList)}}
                style={{ width: 200 }}
            />
            <br/>
            <Table dataSource={userList} columns={columns} ></Table>
        </Style>
    )
}
