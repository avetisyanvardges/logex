import React from 'react';
import {FormikProvider} from "formik";
import {Input, Form} from "antd";
import InputFiled from 'views/shared/forms/InputField';
import AuthLayout from "views/layouts/Auth";
import MessageSvg from 'assets/svg/MessageSvg';
import PasswordSvg from 'assets/svg/PasswordSvg';
import useContainer from "./hook";
import "./style.scss";

const SignIn = () => {
    const { formik } = useContainer();

    return (
        <AuthLayout>
            <div className='signIn'>
               <p className='title'>Մուտք</p>
               <Form onFinish={formik.handleSubmit} className='form'>
                   <FormikProvider value={formik}>
                       <InputFiled
                           name="email"
                           placeholder="Էլ․ հասցե"
                           type="email"
                           className="signInInput"
                           bordered={false}
                           prefix={<MessageSvg />}
                       />
                       <InputFiled
                           name="password"
                           placeholder="Գաղտնաբառ"
                           className="signInInput"
                           asComponent={Input.Password}
                           bordered={false}
                           prefix={<PasswordSvg />}
                       />
                   </FormikProvider>
               </Form>
            </div>
        </AuthLayout>
    )
};

export default SignIn;