import React, {FC} from "react";
import LogexLogo from "assets/svg/LogexLogo";
import {LayoutProps} from '../types';
import "./style.scss";

const AuthLayout: FC<LayoutProps> = ({children}) => (
    <div className='authLayout'>
        <div className='header'><LogexLogo width={163} height={83} /></div>
        <div className='static'>
            <div className='staticContent'/>
        </div>
        <div className='dynamicContent'>{children}</div>
    </div>
)

export default AuthLayout;
