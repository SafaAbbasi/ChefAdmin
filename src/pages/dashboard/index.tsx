import React, { useState } from 'react'
import { Row, Col, Button } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Container, Page, ButtonComponent, Breadcrumb, PopupComponent, SearchBox, TextField, Checkbox, DragAndDrop, ListingCount } from '../../components';

const Dashboard = () => {
  const [modalopen, setModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const actionButton = (
    <ButtonComponent
      text='Add New Recipe'
      className='theme-button'
      icon={<PlusOutlined />}
      handleButtonClick={() => {
        console.log('button clicked')
      }}
      shape='round'
      size='large'
    />
  );

  const handleChange = (event: CheckboxChangeEvent) => {
    setChecked(event.target.checked)
  };

  return (
    <Page title="Dashboard">
      <Container>
        <div>
          <Button type="primary" onClick={() => setModalOpen(true)}>
            modal dialog
          </Button>
        </div>

        <DragAndDrop
          showUploadList={false}
          label='Recipe Thumbnail:'
          labelrequired='*'
          action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        />
        
        {/* Breadcrumb Component */}
        <Breadcrumb
          heading='Recipe Builder'
          breadcrumbIcon='abc'
          iconAction={() => alert('test')}
          button={actionButton}
        />
        {/* Popup Component */}
        <PopupComponent
          title={<h2>Confirmation</h2>}
          bodyText='Are you sure want to create “Bre” to the new category?'
          open={modalopen}
          footer={
            [
              <ButtonComponent
                text='Cancel'
                type='link'
                handleButtonClick={() => {
                  setModalOpen(false)
                }}
              />,
              <ButtonComponent
                className='theme-button'
                text='Continue'
                shape='round'
                size='large'
                handleButtonClick={() => {
                  console.log('button clicked')
                }} />
            ]}
        />
        <Row>
          <Col lg={4}>
            <p>Dashboard Screen</p>
            <Button>Test Theme Button</Button>

            <SearchBox
              onPressEnter={() => alert('searchtest')}
              placeholder='Search by user name or any other keyword'
              prefix={<SearchOutlined />}
              className='b2 search-box'
              size="large"
            />

            <Checkbox
              onChange={handleChange}
              className='b2'
              text='checkbox'
              checked={checked}
            />

            <TextField
              className='b2'
              label="Description"
              placeholder='Input description here'
              onChange={() => console.log(event)}
            />

            <ListingCount
              countingredient={1234}
              textingredient='Total Ingredients'
              countrecipe={3435}
              textrecipe='Total Recipes'
            />

          </Col>
        </Row>
      </Container>
    </Page>
  );
};

export default Dashboard;
