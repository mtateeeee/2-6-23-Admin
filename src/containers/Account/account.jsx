import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Layout, theme } from 'antd';
import { Link } from "react-router-dom";
import { Space, Table, Tag, Button, Modal, Form, Input } from 'antd';
import { CustomLayout } from 'C:/Users/KITS_21/Desktop/admin/src/components/Layout';




const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = React.useState(false);
    const values = Form.useWatch([], form);
    useEffect(() => {
        form
            .validateFields({
                validateOnly: true,
            })
            .then(
                () => {
                    setSubmittable(true);
                },
                () => {
                    setSubmittable(false);
                },
            );
    }, [values]);
    return (
        <Button type="primary" htmlType="submit" disabled={!submittable}>
            Submit
        </Button>
    );
};



const { Content } = Layout;



    

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const Account = () => {
  // Code for data and other logic
  const [form] = Form.useForm();

    const [dataTable, setDataTable] = useState(data);
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        //setLoading(true);
        setTimeout(() => {
            //setLoading(false);
            setOpen(false);
        }, 3000);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const onFinish = (user) => {
        console.log("data", dataTable);
        const newData = dataTable.concat([{
            key: '88898',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],

        }]);

        console.log("newData",newData)
        setDataTable(newData);
        console.log("data", dataTable);

    }

  return (
    <CustomLayout>

      <Link to="/account">
        <div>
        <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        <Table columns={columns} dataSource={dataTable} />
                        <Button type="primary" onClick={showModal}>Add User</Button>
                        <Modal
                            open={open}
                            title="Title"
                            onOk={handleOk}
                            onCancel={handleCancel}
                            footer={null}
                        >
                            <Form
                                form={form}
                                name="validateOnly"
                                layout="vertical"
                                autoComplete="off"
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="age"
                                    label="Age"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item>
                                    <Space>
                                        <SubmitButton form={form} />
                                        <Button htmlType="reset">Reset</Button>
                                    </Space>
                                </Form.Item>
                            </Form>
                        </Modal>


                    </Content>

          
        </div>
      </Link>
      
    </CustomLayout>
  );
};

export default Account;
