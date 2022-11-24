import React, { FC } from "react";
import { LayoutProps } from '../types';
import LogexLogo from "assets/svg/LogexLogo";
import "./style.scss";

const AuthLayout: FC<LayoutProps> = ({children}) => (
    <div className='authLayout'>
        <div className='header'>
            <LogexLogo width={163} height={83} />
        </div>
        {children}
    </div>
)

export default AuthLayout;