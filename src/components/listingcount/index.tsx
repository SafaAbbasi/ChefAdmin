import React from 'react';
import {
    Card,
    Row,
    Col
} from 'antd';

type Props = {
    countingredient?: number
    textingredient?: string
    countrecipe?: number
    textrecipe?: string
    className?: string
}


const ListingCount = (props: Props) => {

    return (
        <div className='list-count'>
            <Card>
                <Row>
                    <Col span={10}>
                        <h1>{props.countrecipe}</h1>
                        <div className='b2'>{props.textrecipe}</div>
                    </Col>
                    <Col span={10}>
                        <h1>{props.countingredient}</h1>
                        <div className='b2'>{props.textingredient}</div>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default ListingCount;

