import React from 'react';
import {FormikProvider} from "formik";
import {Input, Form} from "antd";
import InputFiled from 'views/shared/forms/InputField';
import useContainer from "./hook";
import AuthLayout from "views/shared/layouts/Auth";
import "./style.scss";

const SignIn = () => {
    const { formik } = useContainer();

    return (
        <AuthLayout>
            <div className='signIn'>
                <div className='menuContainer'>
                    <div className='menu'>

                    </div>
                </div>
                <div className='formContainer'>
                    <p className='title'>Մուտք</p>
                    <Form onFinish={formik.handleSubmit} className='form'>
                        <FormikProvider value={formik}>
                            <InputFiled name="email" label="Email" type="email" className="signInInput" />
                            <InputFiled name="password" label="Password" className="signInInput" asComponent={Input.Password} />
                        </FormikProvider>
                    </Form>
                </div>
            </div>
        </AuthLayout>
    )
};

export default SignIn;