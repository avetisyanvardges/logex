import React from 'react';
import {Button, Checkbox, Col, Form} from 'antd';
import {FormikProvider} from 'formik';
import {isEmpty} from 'lodash';
import InputFiled from 'views/shared/forms/InputField';
import useContainer from './hook';
import "./style.scss";

interface IProps {
    title: string,
    formik?: any,
    id?: string;
}

const SelectUser: React.FC<IProps> = ({title, formik, id}) => {
    const {
        openSelectRegionModal,
        openSelectCommunityModal,
        selectedRegion,
        loading,
        selectedCommunity,
        onChangeIsCompany,
        openSelectCustomerModal
    } = useContainer(title, formik, id);

    return (
        <Col span={8}>
            <div style={{border: '1px solid #ddd', padding: 20, borderRadius: '9px'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <h2 style={{flex: 1}}>{title}</h2>
                    <div onClick={() => openSelectCustomerModal(title.toLowerCase())} style={{
                        cursor: 'pointer',
                        height: 30,
                        border: '1px solid #ddd',
                        marginLeft: 5,
                        padding: 5,
                        borderRadius: 8
                    }}>
                        <h5>{`Select ${title}`}</h5>
                    </div>
                </div>
                <Form onFinish={formik.handleSubmit} className='form'>
                    <FormikProvider value={formik}>
                        <InputFiled
                            name={`${title.toLowerCase()}.first_name`}
                            placeholder="First name"
                            label="First name"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />
                        <InputFiled
                            name={`${title.toLowerCase()}.last_name`}
                            placeholder="Last name"
                            label="Last name"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />
                        <InputFiled
                            name={`${title.toLowerCase()}.phone`}
                            placeholder="Phone"
                            label="Phone"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />
                        <InputFiled
                            name={`${title.toLowerCase()}.address`}
                            placeholder="Address"
                            label="Address"
                            className="input"
                            labelClassName="label"
                            formItemClassName='input-form-item'
                        />
                        <div className='check-box-content'>
                            Is company
                            <Checkbox
                                value={!!formik.values[title.toLowerCase()].is_company}
                                checked={!!formik.values[title.toLowerCase()].is_company}
                                className='check-box'
                                onChange={onChangeIsCompany}
                            />
                        </div>
                        <div className='selected-fields'>
                            <div className='filed'>
                                <div className='content'>
                                    <div className='name'>
                                        <span>Region`</span>
                                        <span className='type'>
                                            {!isEmpty(selectedRegion) ? selectedRegion?.region : ''}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Button onClick={() => openSelectRegionModal()}>Select Region</Button>
                        </div>

                        <div className='selected-fields'>
                            <div className='filed'>
                                <div className='content'>
                                    <div className='name'>
                                        <span>Community`</span>
                                        <span className='type'>
                                            {!isEmpty(selectedCommunity) ? selectedCommunity?.community : ''}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Button onClick={() => openSelectCommunityModal()}>Select Community</Button>
                        </div>
                    </FormikProvider>
                </Form>
            </div>
        </Col>
    );
};

export default SelectUser;
