import React, {FC} from 'react';
import {Button} from "antd";
// import {SearchOutlined} from "@ant-design/icons";
import "./style.scss";

interface IProps {
    totalCount?: number,
    onCreate?: () => void,
}

const TableHeader: FC<IProps> = ({totalCount, onCreate}) => (
    <div className='table-header'>
        <div className='item total-count'>Ընդհանուր քանակը` {totalCount || 0}</div>
        {onCreate && <Button className='item add' onClick={() => onCreate()}>+ Ավելացնել</Button>}
        {/*<Input prefix={<SearchOutlined />} placeholder='Փնտրել' className='item' />*/}
    </div>
)

export default TableHeader;