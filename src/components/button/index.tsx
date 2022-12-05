import React from 'react'
import { Button } from 'antd';

type ButtonProp = {
    type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined
    handleButtonClick: () => void
    shape?: "default" | "circle" | "round"
    size?: "large" | "middle" | "small"
    icon?: React.ReactNode
    className?: string
    disabled?: boolean
    loading?: boolean
    text: string
}

const BreadCrumbButton = (props: ButtonProp) => {
    return (
        <Button
            onClick={props.handleButtonClick}
            className={props.className}
            loading={props.loading}
            disabled={props.disabled}
            shape={props.shape}
            icon={props.icon}
            size={props.size}
            type={props.type}
        >
            {props.text}
        </Button>
    )
}

export default BreadCrumbButton;

