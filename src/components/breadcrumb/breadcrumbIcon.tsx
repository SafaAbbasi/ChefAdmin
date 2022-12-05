import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type IconProp = {
    shape: "default" | "circle" | "round"
    size?: "large" | "middle" | "small"
    handleClick: () => void
    className?: string
}

function backwardIcon(props: IconProp) {
    props.handleClick();
    return (
        <Button
            onClick={props.handleClick}
            className={props.className}
            icon={<LeftOutlined />}
            shape={props.shape}
            size={props.size}
        />
    )
}

export default backwardIcon