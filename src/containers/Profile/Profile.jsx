// import React from "react";
// import styled from "styled-components";
// //import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
// import { Menu } from 'antd';
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
// import { Layout, theme } from 'antd';
// import { Progress } from 'antd';
// import { Link } from "react-router-dom";
// import { Space } from 'antd';
// import { PrimaryLayout } from "containers/Layout";


// const Logo = styled.div`
//     color: white;
// `;
// const Menubar = styled.div`
// display: flex;
// flex-direction: column;
// padding: 10px;

    
// `;
// const Profile =()=>
// {
//     return(
//         <PrimaryLayout>
//             const { Header, Content, Sider } = Layout;
//             const Profile1 = () => {
//     const {
//         token: { colorBgContainer },
//     } = theme.useToken();
//     return (
//         <Layout>
//             <Header
//                 style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                 }}
//             >
//                 <div className="demo-logo" />

//                 {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
//                 <Logo>Ant Design Pro</Logo>
//             </Header>
//             <Layout>
//                 <Sider
//                     width={200}
//                     style={{
//                         background: colorBgContainer,
//                     }}

//                 >
//                     <Menubar>
//                         <div>Dashboard</div>
//                         <div>Form</div>
//                         <div>List</div>
//                         <Link to="/dashboard" >
//                             Dashboard
//                         </Link>
//                         <Link to="/profile">
//                             Profile
//                         </Link>
//                         <Link to="/account">
//                             Account
//                         </Link>
//                     </Menubar>
//                     {/* <Menu
//                         mode="inline"
//                         defaultSelectedKeys={['1']}
//                         defaultOpenKeys={['sub1']}
//                         style={{
//                             height: '100%',
//                             borderRight: 0,
//                         }}
//                         items={items2}
//                     /> */}

//                 </Sider>
//                 <Layout
//                     style={{
//                         padding: '0 24px 24px',
//                     }}
//                 >
//                     {/* <Breadcrumb
//                         style={{
//                             margin: '16px 0',
//                         }}
//                     >
//                         <Breadcrumb.Item>Home</Breadcrumb.Item>
//                         <Breadcrumb.Item>List</Breadcrumb.Item>
//                         <Breadcrumb.Item>App</Breadcrumb.Item>
//                     </Breadcrumb> */}
//                     <Content
//                         style={{
//                             padding: 24,
//                             margin: 0,
//                             minHeight: 280,
//                             background: colorBgContainer,
//                         }}
//                     >
//                         <>
//                             <Progress percent={30} />
//                             <Progress percent={50} status="active" />
//                             <Progress percent={70} status="exception" />
//                             <Progress percent={100} />
//                             <Progress percent={50} showInfo={false} />
//                         </>

//                     </Content>

//                     <Space direction="vertical">
//                         <Progress percent={50} />
//                         <Progress percent={50} size="small" />
//                         <Progress percent={50} size={[300, 20]} />
//                     </Space>



//                 </Layout>
//             </Layout>
//         </Layout>
//     );
// };


//         </PrimaryLayout>
//     )
// };
// export default Profile;

// // const items1 = ['1', '2', '3'].map((key) => ({
// //     key,
// //     label: `nav ${key}`,
// // }));



// export default Profile1;

// // const LayoutStyled = styled.div`
// //   background-color: #1c233d;
// //   min-height: 100vh;
// //   .right {
// //     float: right;
// //     width: 75%;
// //   }
// // `;
// // const PrimaryLayout = ({ }) => {
// //     return(
// //         <LayoutStyled>

// //         </LayoutStyled>
// //     )
// // };
// // export default PrimaryLayout;
