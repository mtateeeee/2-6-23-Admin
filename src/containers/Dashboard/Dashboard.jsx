import React from "react";
import styled from "styled-components";
import { Space } from 'antd';
import { Progress } from 'antd';
import { Link } from 'react-router-dom';
import DemoRadialBar from '../../components/DemoRadialBar';
import { CustomLayout } from 'C:/Users/KITS_21/Desktop/admin/src/components/Layout';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line } from '@ant-design/plots';
const TkPr = styled.div`
        width: 197px;
         height: 52px;
         font-family: 'Montserrat';
         font-style: normal;
         font-weight: 700;
         font-size: 32px;
         line-height: 52px;
         color: #4A4A65;
     `;

const Dashboard = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
    smooth: true,
    color: 'l(0) 0.5:#9747FF 1:#14F4C9'

  };
    return (
        <CustomLayout>
            <Link to="/dashboard">
                <div>

                    <div
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            
                        }}
                    >
                        <>
                            <Progress percent={30} />
                            <Progress percent={50} status="active" />
                            <Progress percent={70} status="exception" />
                            <Progress percent={100} />
                            <Progress percent={50} showInfo={false} />
                            <Space wrap>
                                <Progress type="circle" percent={75} />
                                <Progress type="circle" percent={70} status="exception" />
                                <Progress type="circle" percent={100} />
                            </Space>
                            <TkPr>
                                Token Price
                            </TkPr>
                            <Line {...config} />
                            
                            <DemoRadialBar>

                            </DemoRadialBar>

                        </>

                    </div>

                    <div
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            
                        }}
                    >


                    </div>

                </div>
            </Link>

            

        </CustomLayout>
    );
};

export default Dashboard;
