import React, {FC} from "react";
import {Checkbox, Col, Divider, Row} from 'antd';
import useContainer from './hook';

interface IProps {
    items: any[], name: string,sections?: boolean, className?: string, formikPermissions: any
}

const CheckBoxGroupField: FC<IProps> = ({items, name, formikPermissions, sections,  ...props}) => {
    const { field, onChangeHandler, checkAll, indeterminate, onCheckAllChange, getDisabledValue } = useContainer({ name, items, formikPermissions });

    return (
        <>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}
                      style={{marginLeft: 10}}>
                Check all
            </Checkbox>
            <Divider/>
            {sections ? <Row gutter={36}>
                <Checkbox.Group {...field} {...props} onChange={onChangeHandler} value={Object.values(formikPermissions)}>
                    {Object.keys(items).map((key: any,index) => {
                            return (
                                <Col key={`${index}_${key}`} span={6} style={{marginBottom: 30}}>
                                    <div style={{border: '1px solid #ddd', padding: 20, borderRadius: '9px'}}>
                                        <h2>{key}</h2>

                                        {items[key].map((item: any, index: number) => (
                                            <Checkbox
                                                {...item} key={item.value} value={item.value}
                                                disabled={index < 2 ? false : getDisabledValue(items[key])}
                                            >
                                                {item.label}
                                            </Checkbox>
                                        ))}
                                    </div>
                                </Col>
                            );


                    })}
                </Checkbox.Group>
            </Row> : (
                <Checkbox.Group {...field} {...props} onChange={onChangeHandler}>
                    {items.map(({value, label, ...rest}) => (
                        <Checkbox {...rest} key={value} value={value} >
                            {label}
                        </Checkbox>
                    ))}
                </Checkbox.Group>
            )}

        </>
    );
}

export default CheckBoxGroupField;
