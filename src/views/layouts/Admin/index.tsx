import React, {FC} from "react";
import {Button, Layout, Menu, Dropdown, Space} from 'antd';
import {MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined, MenuOutlined, CloseOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

import UserAvatar from 'views/shared/UserAvatar';
import LogexLogo from 'assets/svg/LogexLogo';
import {LayoutProps} from '../types';
import useContainer from './hook';
import "assets/styles/table.scss";
import "assets/styles/selectModal.scss";
import "./style.scss";

const {Header, Sider, Content} = Layout;

const AdminLayout: FC<LayoutProps> = ({children}) => {
    const {
        collapsed, handleCollapsed, menuItems, handleMenuSelect, pathname, currentAdmin, dropdownItems
    } = useContainer();

    return (
        <>
            <div className='adminLayout' style={{width: '100%', position: collapsed ? 'fixed' : 'absolute'}}>
                <Sider trigger={null} collapsible collapsed={collapsed} className='sider left-menu'>
                    <div className="logo"><LogexLogo/></div>
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
                            <div className='collapsed-left-menu'>
                                {collapsed ?
                                    <MenuUnfoldOutlined style={{fontSize: '20px'}}/> :
                                    <MenuFoldOutlined style={{fontSize: '20px'}}/>}
                            </div>
                            <div className='collapsed-mobile-menu'>
                                {collapsed ?
                                    <CloseOutlined className="mobile-menu-icon"/> :
                                    <MenuOutlined className="mobile-menu-icon"/>}
                            </div>
                        </Button>
                        <div className='account'>
                            <Link to='/'><UserAvatar size={38} imageUrl={currentAdmin?.image}/></Link>
                            <Dropdown menu={{items: dropdownItems}} trigger={['click']}>
                                <Space className='dropdownFullName'>
                                    <span
                                        className='name'>{`${currentAdmin.first_name} ${currentAdmin.last_name}`}</span>
                                    <DownOutlined/>
                                </Space>
                            </Dropdown>
                        </div>
                    </Header>
                    <Content className='content'>
                        {children}
                    </Content>
                </Layout>
            </div>
            {collapsed && <>
                <div className='background-modal' onClick={handleCollapsed}/>
                <div className='menu-content'>
                    <Menu
                        onOpenChange={(e) => console.log(e)}
                        className='mobile-header-menu'
                        selectedKeys={[pathname]}
                        mode='inline'
                        theme='light'
                        items={menuItems}
                    />
                </div>
            </>}
        </>
    )
}

export default AdminLayout;