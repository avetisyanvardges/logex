import React, { FC } from "react";
import {Button} from "antd";
import {useLocation, Link} from "react-router-dom";
import classNames from "classnames";
import LogexLogo from "assets/svg/LogexLogo";
import { LayoutProps } from '../types';
import "./style.scss";

const AuthLayout: FC<LayoutProps> = ({children}) => {
    const { pathname } = useLocation();
    return (
        <div className='authLayout'>
            <div className='header'><LogexLogo width={163} height={83} /></div>
            <div className='static'>
                <div className='staticContent'>
                    <div className='menu'>
                        <Link to='/sign-in'>
                            <Button className={classNames('button', {'active': pathname === '/sign-in'})}>
                                Մուտք
                            </Button>
                        </Link>
                        <Link to='/sign-up'>
                            <Button className={classNames('button', {'active': pathname === '/sign-up'})}>
                                Գրանցում
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='dynamicContent'>{children}</div>
        </div>
    )
}

export default AuthLayout;