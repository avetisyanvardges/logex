import React from 'react';
import AdminLayout from 'views/layouts/Admin';
import LoaderWithLayout from "views/shared/LoaderWithLayout";
import useContainer from './hook';

const CreateAndUpdateRole = () => {
    const { id, getPermissionsLoading, getRoleByIdLoading } = useContainer();

    if(getPermissionsLoading || getRoleByIdLoading) {
           return <LoaderWithLayout isAdmin />
    }

    return (
        <AdminLayout>
            <div className='role-forms'>
                CreateAndUpdate {id || 0}
            </div>
        </AdminLayout>
    )
};

export default CreateAndUpdateRole;