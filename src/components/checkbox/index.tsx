import React from 'react';
import { Form, Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';


type Props = {
    defaultChecked?: boolean
    onChange: (event: CheckboxChangeEvent) => void  
    className?: string
    checked?: boolean
    text?: string
}

const Checkboxes = (props: Props) => {

    return (
        <Form.Item className={props.className} >
            <Checkbox
                defaultChecked={props.defaultChecked}
                className={props.className}
                onChange={props.onChange}
                checked={props.checked}
            >
                {props.text}
            </Checkbox>
        </Form.Item>
    )
}

export default Checkboxes;

