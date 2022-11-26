import React, {useCallback, useState} from 'react';
import type { MenuProps } from 'antd';
import { DesktopOutlined, UserOutlined, FileTextOutlined } from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return { key, icon, children, label,} as MenuItem;
}

const items: MenuItem[] = [
    getItem('Regions', '/', <FileTextOutlined />),
    getItem('Community', '/community', <FileTextOutlined />),
    getItem('Users', '/users', <UserOutlined />),
    getItem('Customers', '/customers', <UserOutlined />),
    getItem('Warehouses', '/warehouses', <DesktopOutlined />),
    getItem('Orders', '/orders', <DesktopOutlined />),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
];
function useContainer() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    // const handleMenuSelect = useCallback((value: MenuItem) => {
    //     navigate(value.key);
    // }, []);

    const handleMenuSelect = (key: string) => {
        navigate(key);
    };

    return {
        collapsed,
        setCollapsed,
        items,
        handleMenuSelect,
    }
}

export default useContainer;