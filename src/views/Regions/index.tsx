import React from 'react';
import AdminLayout from '../layouts/Admin';
import useContainer from "./hook";
import "./style.scss";

const Regions = () => {
    const { handleChangeParams } = useContainer();

    return (
        <AdminLayout>
            <div className='regions'>
                <h1 className='title'>Home</h1>
                <button onClick={() => handleChangeParams(5)}>button</button>
            </div>
        </AdminLayout>
    )
}

export default Regions;