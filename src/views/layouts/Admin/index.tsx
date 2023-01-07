import React, {FC} from "react";
import {Button, Dropdown, Layout, Menu, Space} from 'antd';
import {DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons';

import UserAvatar from 'views/shared/UserAvatar';
import LogexLogo from 'assets/svg/LogexLogo';
import {LayoutProps} from '../types';
import useContainer from './hook';
import "./style.scss";

const { Header, Sider, Content } = Layout;

const AdminLayout: FC<LayoutProps> = ({children}) => {
    const { collapsed, handleCollapsed, menuItems, handleMenuSelect, pathname, currentAdmin, dropdownItems } = useContainer();

    return (
        <div className='adminLayout' style={{width: '100%'}}>
            <Sider trigger={null} collapsible collapsed={collapsed} className='sider' >
                <div className="logo"><LogexLogo /></div>
                <Menu
                    onSelect={({key}) => handleMenuSelect(key)}
                    mode="inline"
                    defaultSelectedKeys={[pathname]}
                    items={menuItems}
                />
            </Sider>
            <Layout>
                <Header className='header'>
                    <Button className='trigger' onClick={handleCollapsed}>
                        {collapsed ? <MenuUnfoldOutlined style={{ fontSize: '20px'}}/> : <MenuFoldOutlined style={{ fontSize: '20px'}} />}
                    </Button>
                    <div className='account'>
                        <UserAvatar size={38} imageUrl={currentAdmin?.image}/>
                        <Dropdown menu={{items: dropdownItems}} trigger={['click']}>
                           <Space className='dropdownFullName'>
                               {`${currentAdmin.first_name} ${currentAdmin.last_name}`}
                               <DownOutlined />
                           </Space>
                        </Dropdown>
                    </div>
                </Header>
                <Content className='content'>{children}</Content>
            </Layout>
        </div>
    )
}

export default AdminLayout;
