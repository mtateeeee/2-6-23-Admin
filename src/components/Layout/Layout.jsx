// import styled from "styled-components";
// const LayoutStyled = styled.div`
//   background-color: #1c233d;
//   min-height: 100vh;
//   .right {
//     float: right;
//     width: 75%;
//   }
// `;
// const PrimaryLayout = ({ }) => {
//     return(
//         <LayoutStyled>

//         </LayoutStyled>
//     )
// };
// export default PrimaryLayout;




import abc from "C:/Users/KITS_21/Desktop/admin/src/assets/dashboard.svg"
import abc1 from "C:/Users/KITS_21/Desktop/admin/src/assets/form.svg"
import abc2 from "C:/Users/KITS_21/Desktop/admin/src/assets/list.svg"
import abc3 from "C:/Users/KITS_21/Desktop/admin/src/assets/profile.svg"
import abc4 from "C:/Users/KITS_21/Desktop/admin/src/assets/result.svg"
import abc5 from "C:/Users/KITS_21/Desktop/admin/src/assets/exception.svg"
import abc6 from "C:/Users/KITS_21/Desktop/admin/src/assets/account.svg"
import abc7 from "C:/Users/KITS_21/Desktop/admin/src/assets/graphic.svg"


import profile from "C:/Users/KITS_21/Desktop/admin/src/assets/profile.svg"
import account from "C:/Users/KITS_21/Desktop/admin/src/assets/account.svg"
import React from 'react';
import styled from 'styled-components';
import { Layout, theme } from 'antd';
import { Link } from "react-router-dom";
import { Menu } from 'antd';
import Dashboard from "containers/Dashboard";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const { Header, Content, Sider } = Layout;

const Logo = styled.div`
  color: white;
`;

const Menubar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  //padding-left: 30px;
img{
  width: 20px;
  padding-top: 3px;
}
.select{
  display: flex;
  align-items: center;
  gap: 5px;
}
p{
    
} 
`;

const CustomLayout = ({ children }) => {
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    // getItem('Dashboard', 'sub1', <img src={abc}></img>, [
    // getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    // getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    // ]),]
    
    getItem('Dashbroad', 'sub1',  <img src={abc}></img>, [
      getItem(<Link to="/dashboard">Analysis</Link>, '9'),
      getItem('Monitor', '10'),
      getItem('Workplace', '11'),
    ]),
    
    getItem('Form', 'sub2',  <img src={abc1}></img>, [
      getItem('Basic Form', '9'),
      getItem(<Link to="/dashboard">Step Form</Link>, '10'),
      getItem('Advanced Form', '11'),
      
    ]),

    getItem('List', 'sub3',  <img src={abc2}></img>, [
      getItem('', '9'),
      getItem(<Link to="/dashboard">Step Form</Link>, '10'),
      getItem('Advanced Form', '11'),
      
    ]),

    getItem('Profile', 'sub4',  <img src={abc3}></img>, [
      getItem('Basic Form', '9'),
      getItem(<Link to="/dashboard">Step Form</Link>, '10'),
      getItem('Advanced Form', '11'),
      
    ]),

    getItem('Result', 'sub5',  <img src={abc4}></img>, [
      getItem('Basic Form', '9'),
      getItem(<Link to="/dashboard">Step Form</Link>, '10'),
      getItem('Advanced Form', '11'),
      
    ]),
    getItem('Exception', 'sub6',  <img src={abc5}></img>, [
      getItem('Basic Form', '9'),
      getItem(<Link to="/dashboard">Step Form</Link>, '10'),
      getItem('Advanced Form', '11'),
      
    ]),

    getItem('Account', 'sub7',  <img src={abc6}></img>, [
      getItem('Basic Form', '9'),
      getItem(<Link to="/dashboard">Step Form</Link>, '10'),
      getItem('Advanced Form', '11'),
      
    ]),
    getItem('Graphic Editor', 'sub8',  <img src={abc7}></img>, [
      getItem('Basic Form', '9'),
      getItem(<Link to="/dashboard">Step Form</Link>, '10'),
      getItem('Advanced Form', '11'),
      
    ]),
    
  ]
  
    
    const onClick = (e) => {
      console.log('click ', e);
    };

  return (
    <Layout>
      {/* Header */}
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Logo>Ant Design Pro</Logo>
      </Header>

      <Layout>
        {/* Sider */}
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menubar>
            <div>
              <Menubar>

                <div>
                  <Menu
                    onClick={onClick}
                    style={{
                      width: 180,
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    items={items}
                  />
                </div>


                <Link to="/dashboard" >
                  <div>
                    <div className="select">
                      <img src={abc}></img>
                      <p>
                        Dashboard
                      </p>
                    </div>

                  </div>

                </Link>

                <Link to="/profile" >
                  <div>
                    <div className="select">
                      <img src={profile}></img>
                      <p>
                        Profile
                      </p>
                    </div>

                  </div>

                </Link>

                <Link to="/account" >
                  <div>
                    <div className="select">
                      <img src={account}></img>
                      <p>
                        Account
                      </p>
                    </div>

                  </div>

                </Link>
              </Menubar>



            </div>
            {/* Menubar items */}
          </Menubar>
        </Sider>

        <Layout style={{ padding: '0 24px 24px' }}>

          {/* Content */}
          <Content style={{ padding: 24, margin: 0, minHeight: 280, background: colorBgContainer }}>
            {children}
          </Content>

          {/* Additional Content */}
          <Content style={{ padding: 24, margin: 0, minHeight: 280, background: colorBgContainer }}>
            {/* Additional content goes here */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
