import React from 'react';
import { Form, Input } from 'antd';

type Props = {
    size?: "large" | "middle" | "small"
    onChange: () => void
    placeholder?: string
    className?: string
    maxLength?: number
    label?: string
}

const { TextArea } = Input;

const TextField = (props: Props) => {

    return (
        <Form.Item className='b2' label={props.label} >
            <TextArea
                placeholder={props.placeholder}
                className={props.className}
                maxLength={props.maxLength}
                onChange={props.onChange}
                size={props.size}
                rows={4}
            />
        </Form.Item>
    )
}

export default TextField;

