import React, { FC } from "react";
import { Button, Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import LogexLogo from 'assets/svg/LogexLogo';
import { LayoutProps } from '../types';
import useContainer from './hook';
import "./style.scss";

const { Header, Sider, Content } = Layout;

const AdminLayout: FC<LayoutProps> = ({children}) => {
    const { collapsed, setCollapsed, items, handleMenuSelect } = useContainer();

    return (
        <div className='adminLayout'>
            <Sider trigger={null} collapsible collapsed={collapsed} className='sider'>
                <div className="logo">
                    <LogexLogo />
                </div>
                <Menu
                    onSelect={(value) => handleMenuSelect(value.key)}
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                />
            </Sider>
            <Layout>
                <Header className='header'>
                    <Button className='trigger' onClick={() => setCollapsed(!collapsed)}>
                        {collapsed ? <MenuUnfoldOutlined style={{ fontSize: '20px'}}/> : <MenuFoldOutlined style={{ fontSize: '20px'}} />}
                    </Button>
                </Header>
                <Content className='content'>{children}</Content>
            </Layout>
        </div>
    )
}

export default AdminLayout;