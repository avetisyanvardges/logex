import React from 'react';
import {Checkbox, Form} from 'antd';
import AdminLayout from 'views/layouts/Admin';
import LoaderWithLayout from "views/shared/LoaderWithLayout";
import InputFiled from 'views/shared/forms/InputField';
import CheckBoxGroupField from 'views/shared/forms/CheckBoxGroupField';
import useContainer from './hook';
import {FormikProvider} from 'formik';

const CreateAndUpdateRole = () => {
    const { id, getPermissionsLoading, getRoleByIdLoading, formik, roleById, permissions } = useContainer();

    if(getPermissionsLoading || getRoleByIdLoading) {
           return <LoaderWithLayout isAdmin />
    }

    return (
        <AdminLayout>
            <div className='role-forms'>
                <Form onFinish={formik.handleSubmit} className='form'>
                    <FormikProvider value={formik}>
                        <InputFiled name="name" placeholder="Role name" className="name-input" />
                        <Checkbox.Group>
                            {permissions.map(item => (
                                <Checkbox key={item.id} name={item.id}>
                                    {item.name}
                                </Checkbox>
                            ))}
                        </Checkbox.Group>
                    </FormikProvider>
                </Form>
            </div>
        </AdminLayout>
    )
};

export default CreateAndUpdateRole;