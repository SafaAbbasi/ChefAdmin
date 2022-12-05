import React, { useState } from 'react';
import type { UploadChangeParam } from 'antd/es/upload';
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import {
    Form,
    Upload,
    message
} from 'antd';

type Props = {
    showUploadList?: boolean
    labelrequired?: string
    beforeUpload?: string
    className?: string
    action?: string
    label?: string
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt3M = file.size / 1024 / 1024 < 3;
    if (!isLt3M) {
        message.error('Image must smaller than 3MB!');
    }
    return isJpgOrPng && isLt3M;
};


const DragAndDrop = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as RcFile, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    return (
        <>
            <Form.Item valuePropName="fileList" className={props.className}>
                <label className='b2 upload-label'>{props.label} <span className='upload-span'>{props.labelrequired}</span></label>
                <Upload
                    showUploadList={props.showUploadList}
                    beforeUpload={beforeUpload}
                    listType="picture-card"
                    onChange={handleChange}
                    action={props.action}
                >
                    {imageUrl ? <img className='ant-upload-list-picture-card-container' src={imageUrl} alt="image" /> :
                        <div>
                            {loading ? <LoadingOutlined /> : <PlusOutlined />}
                            <p className="b2 ant-upload-text">Drop your image here or browse</p>
                            <p className="b3 ant-upload-hint">Minimum file 3mb</p>
                        </div>
                    }
                </Upload>
            </Form.Item>
        </>
    );
};

export default DragAndDrop;