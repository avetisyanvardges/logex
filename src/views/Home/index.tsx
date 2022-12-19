import React from "react";
import AdminLayout from "views/layouts/Admin";
import useContainer from "./hook";
import "./style.scss";
import UserAvatar from "views/shared/UserAvatar";
import {Button, Divider} from "antd";

const Home = () => {
    const { currentAdmin } = useContainer();
    return (
        <AdminLayout>
            <div className='home'>
                <div className='top-content'>
                    <h3 className='title'>Անձնական տվյալներ</h3>
                    <div className='content'>
                        <UserAvatar size={138} />
                    </div>
                    <div className='information-content'>
                        <p className='name'>{currentAdmin.first_name} {currentAdmin.last_name}</p>
                        {currentAdmin.address && <p className='address'>{`Հասցե${'՝'} ${currentAdmin.address}`}</p>}
                    </div>
                    <div className='button-content'>
                        <Button className='button'>
                            Թարմացնել տվյալները
                        </Button>
                    </div>
                </div>
                <Divider />
            </div>
        </AdminLayout>
    )
};

export default Home;