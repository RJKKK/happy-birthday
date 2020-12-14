import React, {useState} from 'react';
import ImgCrop from 'antd-img-crop';
import {Upload} from 'antd';
import styled from "styled-components";

const Style = styled('div')`

`;

export default function MyUpload(props) {
    const onPreview = async (file,fileList)=> {
        let src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
        })
        props.getImage(src)
    };
    const onImageChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const [fileList, setFileList] = useState([]);
    return (
        <Style>
            <ImgCrop
                modalOk={"完成"}
                modalCancel={"取消"}
                modalTitle={"裁剪图片"}
                {...props} >
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="text"
                    fileList={fileList}
                    showUploadList={false}
                    onChange={onImageChange}
                    beforeUpload={onPreview}
                    {...props}
                >
                    {fileList.length < 1 && '修改用户头像'}
                </Upload>
            </ImgCrop>
        </Style>
    )
}