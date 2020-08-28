import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Select,Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {UseUserDetail} from '../hooks';
const { Option } = Select;

const Style = styled('div')`
  #components-form-demo-control-hooks .ant-btn {
  margin-right: 8px;
}
`;


const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
export default function UserDetail (props) {
    const [form] = Form.useForm();

    const onGenderChange = value => {
        switch (value) {
            case "male":
                form.setFieldsValue({ note: "Hi, man!" });
                return;
            case "female":
                form.setFieldsValue({ note: "Hi, lady!" });
                return;
            case "other":
                form.setFieldsValue({ note: "Hi there!" });
                return;
        }
    };

    const onFinish = values => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            note: 'Hello world!',
            gender: 'male',
        });
    };
    const userDetail = UseUserDetail(props.match.params.account)
    return (
        <Style>
            <div>
                <Avatar size={70} icon={<UserOutlined />} src={userDetail.logo} />
                <Form form={form} name="control-hooks"  onFinish={onFinish}>
                    <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            onChange={onGenderChange}
                            allowClear
                        >
                            <Option value="male">male</Option>
                            <Option value="female">female</Option>
                            <Option value="other">other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                    >
                        {({ getFieldValue }) => {
                            return getFieldValue('gender') === 'other' ? (
                                <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            ) : null;
                        }}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                        <Button type="link" htmlType="button" onClick={onFill}>
                            Fill form
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Style>
    )
}
