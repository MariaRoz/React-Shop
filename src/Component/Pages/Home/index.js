import React from 'react';
import { Row, Col } from 'antd';
import { Card } from './Blocks'
import { Layout } from 'antd';
import data from '../../../fake_cards'

export const Home = () => {
    const renderCart = (item) => (
        <Col span={6} >
            <Card item={item}/>
        </Col>
    )

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Row justify="space-around" gutter={[25, 25]}>
                {
                    data.map(el => renderCart(el))
                }
            </Row>
        </Layout>
    )
};
