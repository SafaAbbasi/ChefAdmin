import React, { useState } from 'react';
import { Input } from 'antd';

type Props = {
    size?: "large" | "small" 
    prefix?: React.ReactNode
    onPressEnter: () => void
    placeholder?: string
    className?: string
}

const SearchBox = (props: Props) => {
    return (
        <Input
            onPressEnter={props.onPressEnter}
            placeholder={props.placeholder}
            className={props.className}
            prefix={props.prefix}
            size={props.size}
        />
    );
};

export default SearchBox;