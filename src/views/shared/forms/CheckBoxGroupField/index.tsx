import React, {FC} from "react";
import {Checkbox, Col, Divider, Row} from 'antd';
import useContainer from './hook';

interface IProps {
    items: any[], name: string,sections?: boolean, className?: string,
}

const CheckBoxGroupField: FC<IProps> = ({items, name,sections,  ...props}) => {
    const { field, onChangeHandler, checkAll, indeterminate, onCheckAllChange } = useContainer({ name, items });
    return (
        <>
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}
                      style={{marginLeft: 10}}>
                Check all
            </Checkbox>
            <Divider/>
            {sections ? <Row gutter={36}>
                <Checkbox.Group {...field} {...props} onChange={onChangeHandler}>
                    {Object.keys(items).map((key: any) => {
                            return (
                                <Col span={6} style={{marginBottom: 30}}>
                                    <div style={{border: '1px solid #ddd', padding: 20, borderRadius: '9px'}}>
                                        <h2>{key}</h2>

                                        {items[key].all.map(({value, label, ...rest}: any) => {
                                            // console.log(label.includes('full') || label.includes('list'))
                                            return (
                                                <Checkbox {...rest} key={value} value={value}>
                                                    {label}
                                                </Checkbox>
                                            );
                                        })}
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
