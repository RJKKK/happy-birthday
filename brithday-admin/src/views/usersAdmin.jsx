import React from 'react';
import styled from "styled-components";
import {UserList} from '../hooks'
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;
// import {myContext} from "../store"
const Style = styled('div')`

}
`;

export default function UsersAdmin () {
    // const {authState,authDispatch} = useContext(myContext)
    // const {accountDetailState, accountDetailDispatch} = useContext(myContext)
    let userList = UserList();
    console.log(userList)
    return(
        <Style>
        
        </Style>
    )
}
