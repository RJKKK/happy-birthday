import React, {useMemo, useRef, useState} from "react";
import styled from "styled-components";
import { Form, Input, Button, Select,Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {UseUserDetail} from '../hooks';
import dictionary from "../assert/dictionary";
const { Option } = Select;

const Style = styled('div')`
  #components-form-demo-control-hooks .ant-btn {
  margin-right: 8px;
}
.main{
padding: 0 20vw;
}
`;


export default function UserDetail (props) {
    const onFinish = values => {
        console.log(values);
    }
    const [userDetail,setUserDetail] = UseUserDetail(props.match.params.account)
    const [editForm] = Form.useForm()
    editForm.setFieldsValue(userDetail)
    return (
        <Style>
            <div className={'main'}>
                <Avatar size={70} icon={<UserOutlined />} src={userDetail.logo} style={{'marginBottom':'8%'}} />
                <Form  name="control-hooks" form={editForm} initialValues={{...userDetail}}  labelCol={{
                    span: 4
                }}
                      onFinish={onFinish}>
                    <Form.Item name={'_id'} initialValue={userDetail._id} label="用户id" >
                        <Input disabled />
                    </Form.Item>
                    <Form.Item name={'account'} initialValue={userDetail.account} label="账号" >
                    <Input value={userDetail.account} disabled />
                    </Form.Item>
                    <Form.Item  label="用户昵称" name={'name'} rules={[{ required: true }]}>
                        <Input value={userDetail.name} onChange={e=>setUserDetail({...userDetail,name:e.target.value})} />
                    </Form.Item>
                    <Form.Item  label="性别" name={'gender'} rules={[{ required: true }]}>
                        <Select
                            placeholder="请选择"
                            allowClear
                            value={userDetail.gender}
                            onChange={val=>setUserDetail({...userDetail,gender:val})}
                        >
                            <Option value={dictionary.gender.male}>男</Option>
                            <Option value={dictionary.gender.female}>女 </Option>
                            <Option value={dictionary.gender.other}>未知</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item  label="邮箱" name={'email'} rules={[{ required: true }]}>
                        <Input value={userDetail.name} onChange={e=>setUserDetail({...userDetail,email:e.target.value})} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                           提交
                        </Button>
                        <Button htmlType="button" >
                            返回
                        </Button>

                    </Form.Item>
                </Form>
            </div>
        </Style>
    )
}
