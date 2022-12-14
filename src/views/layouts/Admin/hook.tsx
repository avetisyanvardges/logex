import React, {useCallback, useMemo, useState} from 'react';
import type {MenuProps} from 'antd';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {FileTextOutlined} from '@ant-design/icons';
import useTypedSelector from 'hooks/useTypedSelector';
import LogAuth from 'assets/svg/LogAuth';
import Account from 'lib/account';
import history from "utils/browserHistory";
import {MENU_ITEMS} from "constants/routesConfig";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return { key, icon, children, label,} as MenuItem;
}

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

    /**  menu items  */
    const menuItems: MenuItem[] = [
        getItem(<Link to='/'>Home</Link>, '/', <FileTextOutlined />),
        ...MENU_ITEMS.reduce((acc: MenuItem[], item) => {
            if(currentAdmin.permissions?.includes(item.permission)) {
                acc.push(getItem(<Link to={item.path}>{item.name}</Link>, item.path, <FileTextOutlined />));
            }
            return acc;
        }, []),
    ];

    /**  handle menu selected  */
    const handleMenuSelect = useCallback((key: string) => {
        navigate(key);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    /**  handle menu collapsed  */
    const handleCollapsed = useCallback(() => {
        setCollapsed(prev => !prev);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [collapsed]);

    /**  handle logAuth  */
    const handleLogAuth = () => {
        Account.delete();
        history.replace('/auth/sign-in');
    }

    /**  dropdown items  */
    const dropdownItems: MenuProps['items'] = useMemo(() => ([
        {
            label: <div style={dropdownItemStyles} onClick={handleLogAuth}><LogAuth /> ?????????? ??????</div>,
            key: '?????????? ??????',
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
