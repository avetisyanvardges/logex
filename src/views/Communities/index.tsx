import React from 'react';
import AdminLayout from 'views/layouts/Admin';
import TableHeader from 'views/shared/TableHeader';
import useContainer from './hook';

const Communities = () => {
    const { handleCreate } = useContainer();

    return (
        <AdminLayout>
            <div className='communities'>
                <TableHeader onCreate={handleCreate} totalCount={10} />
                Community
            </div>
        </AdminLayout>
    )
}

export default Communities;