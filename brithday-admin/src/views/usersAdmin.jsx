import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import styled from "styled-components";
import {UseUserList} from '../hooks'
import { Input,Table,Space,DatePicker } from 'antd';
const { Search } = Input;
const { RangePicker } = DatePicker;
const Style = styled('div')`
  .my-table{
  margin-top: 24px;
}
`;

export default function UsersAdmin (props) {
    const [form,setForm] = useState({
        keyWord:'',
        pageSize:8,
        index:1,
        range:null
    })
    let userList = UseUserList(form);
    const [columns,setColumns] = useState([
        {title:"姓名",dataIndex:'name',key:'name'},
        {title:"账号名称",dataIndex:'account',key:'account'},
        {title:"生日",dataIndex:'birthday',key:'birthday'},
        {title:"邮箱",dataIndex:'email',key:'email'},
        {title:"创建日期",dataIndex:'createTime',key:'createTime'},
        {title:"操作",key:'action',render:(text,record)=>(
            <Space size={'middle'}>
                <Link to={`${props.location.pathname}/${record.account}`}>编辑</Link>
                <a>删除</a>
            </Space>
            )}
    ])

    return(
        <Style>
            <Space size={'large'}>
                <Space>
            选择日期:<RangePicker
                ranges={{}}
                format="YYYY/MM/DD"
                placeholder={['起始时间','结束时间']}
                onChange={(dates)=>setForm({range:[Date.parse(dates[0]._d),Date.parse(dates[1]._d)]})}
            />
                </Space>
                <Space >
           查询:<Search
                placeholder="请输入关键字进行搜索"
                onSearch={() =>{ setForm({keyWord: '12'});}}
                style={{ width: 200 }}
            />
            </Space>
                </Space>
            <br/>
            <Table className={'my-table'} dataSource={userList.list} columns={columns} pagination={
                {defaultPageSize:8,total:userList.total,onChange:(index,pageSize)=>setForm({index,pageSize})}
            }></Table>
        </Style>
    )
}
