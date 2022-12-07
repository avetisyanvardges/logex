import React, {useCallback, useMemo, useState} from 'react';
import type { MenuProps } from 'antd';
import {useLocation, useNavigate} from 'react-router-dom';
import { DesktopOutlined, UserOutlined, FileTextOutlined } from '@ant-design/icons';
import useTypedSelector from 'hooks/useTypedSelector';
import LogAuth from 'assets/svg/LogAuth';
import Account from 'lib/account';
import history from "utils/browserHistory";
type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return { key, icon, children, label,} as MenuItem;
}

const menuItems: MenuItem[] = [
    getItem('Regions', '/', <FileTextOutlined />),
    getItem('Community', '/community', <FileTextOutlined />),
    getItem('Users', '/users', <UserOutlined />),
    getItem('Customers', '/customers', <UserOutlined />),
    getItem('Warehouses', '/warehouses', <DesktopOutlined />),
    getItem('Orders', '/orders', <DesktopOutlined />),
    getItem('Roles', '/roles', <DesktopOutlined />),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
];

const dropdownItemStyles = {
    minWidth: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}

function useContainer() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [collapsed, setCollapsed] = useState(false);
    const { currentAdmin } = useTypedSelector(({admins}) => admins);

    /**  handle menu selected  */
    const handleMenuSelect = useCallback((key: string) => {
        navigate(key);
    }, [navigate]);

    /**  handle menu collapsed  */
    const handleCollapsed = useCallback(() => {
        setCollapsed(prev => !prev);
    }, [collapsed]);

    /**  handle logAuth  */
    const handleLogAuth = () => {
        Account.delete();
        history.replace('/auth/sign-in');
    }

    /**  dropdown items  */
    const dropdownItems: MenuProps['items'] = useMemo(() => ([
        {
            label: <div style={dropdownItemStyles} onClick={handleLogAuth}><LogAuth /> Դուրս գալ</div>,
            key: 'Դուրս գալ',
        },
    ]), []);

    return {
        collapsed,
        currentAdmin,
        handleCollapsed,
        handleMenuSelect,
        pathname,
        menuItems,
        dropdownItems,
    }
}

export default useContainer;