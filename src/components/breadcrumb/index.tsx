import * as React from 'react';
import {
    Layout,
    Card,
    Row,
    Col
} from 'antd';
import BreadCrumb from './breadcrumb';
import BreadcrumbIcon from './breadcrumbIcon';

type breadcrumbProps = {
    button?: React.ReactNode
    breadcrumbIcon?: string
    iconAction: () => void
    heading: string
}

export default function breadcrumb(props: breadcrumbProps) {
    const { Content } = Layout;

    return (
        <div>
            <Card>
                <Row>
                    <Col className='breadcrumb-button' span={1} >
                        {props.breadcrumbIcon && (
                            <BreadcrumbIcon className='breadcrumb-icon' handleClick={props.iconAction} shape='circle' size='large' />
                        )}
                    </Col>

                    <Col className='breadcrumb' span={19}>
                        <h1 className='breadcrumb-heading'>{props.heading}</h1>
                        <BreadCrumb homepath='Dashboard' />
                    </Col>

                    <Col className='breadcrumb-button' span={3}>
                        {props.button}
                    </Col>
                </Row>
            </Card>
        </div>
    );
}
