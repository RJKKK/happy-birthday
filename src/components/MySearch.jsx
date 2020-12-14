import { Input,Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import React,{useState} from "react";
export default function MySearch(props) {
    return(
        <>
            <Input
                placeholder="请输入关键字搜索用户"

                style={{ width: 200,marginRight:15 }}
            />
                <Button shape="circle" onClick={()=>{props.fn()}} icon={<SearchOutlined />} />
        </>
    )
}
