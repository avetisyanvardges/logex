import React from 'react';
import AdminLayout from 'views/layouts/Admin';
import useContainer from './hook';

const CreateAndUpdateRole = () => {
    const { id } = useContainer();
    return (
        <AdminLayout>
            <div className='role-forms'>
                CreateAndUpdate {id || 0}
            </div>
        </AdminLayout>
    )
};

export default CreateAndUpdateRole;